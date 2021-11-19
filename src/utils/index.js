import { useState } from 'react'

export const generateId = () => new Date().getUTCMilliseconds();

export const generateUser = () => {
  return {
    id: generateId(),
    name: 'Anonymous'
  }
}