import { useMotionValue, motion, animate } from 'motion/react'
import { useRef } from 'react'

interface Props {
  onPull: () => void
  disabled: boolean
}

// Clock positions relative to horizontal-right (3 o'clock = 0°)
// 1pm ≈ -60°,  5pm ≈ +60°,  midpoint at 0° (3 o'clock)
const REST_ANGLE = -60
const PULL_ANGLE = 60
const ARM_LENGTH = 92
const BALL_R = 14

export default function Lever({ onPull, disabled }: Props) {
  const rotate = useMotionValue(REST_ANGLE)
  const pivotRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const dragMoved = useRef(0)

  const springBack = () =>
    animate(rotate, REST_ANGLE, { type: 'spring', stiffness: 280, damping: 22 })

  const doPull = () => {
    onPull()
    springBack()
  }

  const handlePointerDown = (e: React.PointerEvent) => {
    if (disabled) return
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    dragging.current = true
    dragMoved.current = 0
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    dragMoved.current += Math.abs(e.movementX) + Math.abs(e.movementY)
    const pivot = pivotRef.current!.getBoundingClientRect()
    const dx = e.clientX - (pivot.left + pivot.width / 2)
    const dy = e.clientY - (pivot.top + pivot.height / 2)
    const angle = Math.atan2(dy, dx) * (180 / Math.PI)
    rotate.set(Math.min(PULL_ANGLE, Math.max(REST_ANGLE, angle)))
  }

  const handlePointerUp = () => {
    if (!dragging.current) return
    dragging.current = false
    const wasClick = dragMoved.current < 8
    if (wasClick) {
      // Animate full arc on click, then spring back
      animate(rotate, PULL_ANGLE, { duration: 0.18, ease: 'easeIn' }).then(doPull)
    } else if (rotate.get() >= 0) {
      doPull()
    } else {
      springBack()
    }
  }

  return (
    // Total bounding box: arm length + ball overhang, tall enough for full arc
    <div
      className="relative select-none"
      style={{ width: ARM_LENGTH + BALL_R + 4, height: (ARM_LENGTH + BALL_R) * 2 }}
    >
      {/* Pivot mount — fixed circle at left-center */}
      <div
        ref={pivotRef}
        className="absolute rounded-full z-10"
        style={{
          width: 18,
          height: 18,
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          background: '#27272a',
          boxShadow: '0 1px 4px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255,255,255,0.08)',
        }}
      />

      {/* Arm — rotates from left-center pivot */}
      <motion.div
        style={{
          position: 'absolute',
          left: 9, // center of mount
          top: '50%',
          translateY: '-50%',
          width: ARM_LENGTH,
          height: 9,
          borderRadius: 999,
          transformOrigin: 'left center',
          rotate,
          // Gradient goes top→bottom in the arm's LOCAL space.
          // This correctly represents a cylindrical rod lit from above
          // and stays accurate as the arm rotates.
          background: 'linear-gradient(to bottom, #a1a1aa, #52525b)',
          boxShadow: '0 2px 5px rgba(0,0,0,0.28)',
        }}
      >
        {/* Ball handle at far end */}
        <div
          style={{
            position: 'absolute',
            right: -BALL_R,
            top: '50%',
            transform: 'translateY(-50%)',
            width: BALL_R * 2,
            height: BALL_R * 2,
            borderRadius: '50%',
            // Light from upper-left: small bright spot, midrange red, dark shadow at edge
            background:
              'radial-gradient(circle at 38% 32%, #fca5a5 0%, #dc2626 48%, #991b1b 82%, #7f1d1d 100%)',
            boxShadow:
              '0 2px 8px rgba(185,28,28,0.45), 0 1px 3px rgba(0,0,0,0.3)',
            cursor: disabled ? 'default' : 'grab',
            touchAction: 'none',
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        />
      </motion.div>
    </div>
  )
}
