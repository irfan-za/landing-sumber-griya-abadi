'use client'
import { ThemeProvider } from "next-themes";
import React from 'react'

export default function NextThemeProvider({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
{children}    </ThemeProvider>
  )
}
