import { useState, useCallback } from "react";
import SlotReel from "@/components/SlotReel";
import Lever from "@/components/Lever";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";

const SIGNATURES = [
  "waffle iron",
  "brita filter",
  "roomba",
  "smart fridge",
  "dehumidifier",
  "wall calendar",
];

export default function SplashCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const handlePull = useCallback(() => {
    if (spinning) return;
    setSpinning(true);

    let spins = 0;
    const totalSpins = 10;

    const step = () => {
      setCurrentIndex((i) => (i + 1) % SIGNATURES.length);
      spins++;
      if (spins < totalSpins) {
        // decelerate: starts at 60ms, slows to ~220ms
        setTimeout(step, 60 + spins * 16);
      } else {
        setSpinning(false);
      }
    };

    setTimeout(step, 60);
  }, [spinning]);

  return (
    <div className="relative">
      {/* Gmail compose card */}
      <div className="w-84 rounded-xl overflow-hidden shadow-xl border border-gray-100">
        {/* Title bar */}
        <div className="bg-gray-700 px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Body */}
        <div className="bg-white px-6 py-5 flex flex-col gap-2">
          <h2 className="text-lg font-medium text-gray-700">New Message</h2>
          <Field orientation={"horizontal"}>
            <FieldLabel htmlFor="to">To:</FieldLabel>
            <Input id="to" value={"jess@gmail.com"} readOnly />
          </Field>
          <Field orientation={"horizontal"}>
            <FieldLabel htmlFor="subject">Subject:</FieldLabel>
            <Input id="subject" value={"BIRTHDAYYY"} readOnly />
          </Field>
          {/* Body space */}
          <div className="flex flex-col pt-2 gap-4 text-gray-600">
            <p>Hey Jess!</p>
            <p>CANNOT WAIT to see you this weekend. Deets are attached :)</p>
            <p>Love, K</p>
          </div>

          {/* Signature */}
          <div>
            <p className="text-sm text-gray-400">-- </p>
            <hr className="my-2 border-gray-100" />
            <div className="text-sm text-gray-400 flex gap-1 items-start overflow-hidden">
              <span className="shrink-0">Sent from my</span>
              <SlotReel phrases={SIGNATURES} currentIndex={currentIndex} />
            </div>
          </div>
        </div>
      </div>

      {/* Lever — pivot sits at the center of the card's right edge */}
      <div className="absolute top-1/2 -translate-y-1/2" style={{ left: '100%' }}>
        <Lever onPull={handlePull} disabled={spinning} />
      </div>
    </div>
  );
}
