import { useEffect, useState } from 'react'

// About page script hook
export default function useAboutScript() {
  const [subtitle, setSubtitle] = useState('Profile')

  useEffect(() => {
    document.title = 'About · Rama Krishnan'

    const cycle = ['Profile', 'Engineering Mindset', 'Open Source Builder', 'Systems Vision']
    let idx = 0
    const interval = setInterval(() => {
      idx = (idx + 1) % cycle.length
      setSubtitle(cycle[idx])
    }, 2800)

    return () => {
      clearInterval(interval)
      document.title = 'Rama Krishnan Portfolio'
    }
  }, [])

  return { subtitle }
}
