import eases from 'eases'

export default options => {
  if (typeof window === 'undefined')
    return

  let currentTime = 0

  const scrollY = window.scrollY || document.documentElement.scrollTop
  const scrollTargetY = options.to || 0
  const speed = options.speed || 650
  const easing = options.easing || 'sineOut'
  const time = speed / 1000

  const tick = () => {
    currentTime += 1 / 60

    const
      p = currentTime / time,
      t = eases[easing](p)

    if (p < 1) {
      window.requestAnimationFrame(tick)
      window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t))
    } else {
      window.scrollTo(0, scrollTargetY)
    }
  }

  window.requestAnimationFrame(tick)
}
