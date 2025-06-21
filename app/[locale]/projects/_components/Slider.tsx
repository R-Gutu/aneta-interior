"use client";
import { useState } from "react";
import Image from "next/image";
export default function Slider({ images, key }: { images: string[], key?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div key={key || 0} className="grid grid-cols-3">
      <div onClick={() => setCurrentIndex(prev => prev === 0 ? images.length-1 : prev - 1)} className="bg-red-500"></div>
      <Image src={images[currentIndex]} width={500} height={500} alt="idk"/>
      <div onClick={() => setCurrentIndex(prev => (prev+1)%images.length)} className="bg-red-500"></div>
    </div>
  )
}