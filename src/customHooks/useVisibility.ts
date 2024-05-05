import { MutableRefObject, useEffect, useRef, useState } from 'react'

export default function useVisibility(
  offset = 0,
): [boolean, MutableRefObject<HTMLDivElement|null>] {
  const [isVisible, setIsVisible] = useState(false)
  const currentElement = useRef(null)

  const onScroll = () => {
    if (!currentElement.current) {
      setIsVisible(false)
      return
    }
    const top = ( currentElement.current as any ).getBoundingClientRect().top
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight)
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true)
    return () => document.removeEventListener('scroll', onScroll, true)
  })

  return [isVisible, currentElement];
}