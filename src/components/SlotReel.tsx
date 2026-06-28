import { motion } from 'motion/react'

interface Props {
  phrases: string[]
  currentIndex: number
}

const ITEM_H = 20 // matches text-sm line-height

export default function SlotReel({ phrases, currentIndex }: Props) {
  return (
    <div
      className="overflow-hidden inline-block"
      style={{ height: ITEM_H }}
    >
      <motion.div
        animate={{ y: -(currentIndex * ITEM_H) }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      >
        {phrases.map((phrase) => (
          <div key={phrase} style={{ height: ITEM_H }} className="leading-5">
            {phrase}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
