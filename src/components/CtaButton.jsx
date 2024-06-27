'use client'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function CtaButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const y = window.scrollY;
    if (y > 500 && y < 3000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    {
      isVisible &&
    <div className='sticky w-full rounded-t-lg p-1 lg:p-2 bottom-0 border bg-white mx-auto z-50'>
      <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-500 hover:scale-95 text-gray-700 text-lg font-semibold"><Link href={'#buy'}>Pesan Sekarang (klik disini)</Link></Button>
    </div>
    }
    </>
  )
}
