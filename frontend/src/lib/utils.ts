import { type ClassValue, clsx } from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface scrollWithRefProps {
  ref: React.RefObject<HTMLDivElement>;
  behavior?: 'auto' | 'smooth';
}

export const scrollWithRef = ({ ref, behavior = 'smooth' }: scrollWithRefProps) => {
  ref.current?.scrollTo({
    top: ref.current.scrollHeight,
    behavior
  })
}
