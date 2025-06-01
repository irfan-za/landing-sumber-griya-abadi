'use client';
import { generatePublishDate } from '@/lib/utils'
import React from 'react'

export default function PublishDate({ id }) {
  return (
    <span>{generatePublishDate(id)}</span>
  )
}
