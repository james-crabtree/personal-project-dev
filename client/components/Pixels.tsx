import { useState, useEffect } from 'react'

function Pixel() {
  const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0x1000)
  .toString(16)
  .padStart(6, '0')}`
}