import scroll from './scrollTo'

export default $links => {
  const positions = []

  const handleScroll = () => {
    window.requestAnimationFrame(() => {
      const y = window.scrollY
      const $current = $links.parentNode.querySelector('.active')

      positions.sort((a, b) => b - a).some(i => {
        if (y >= i) {
          const $link = $links.parentNode.querySelector(`[data-position="${i}"]`)

          if ($current) {
            $current.classList.remove('active')
          }

          $link.classList.add('active')
          return 1
        }
      })
    })
  }

  const handleResize = () => {
    positions = []

    for (const $link of $links) {
      const position = getPosition($link.dataset.to)
      $link.dataset.position = position
      positions.push(position)
    }
  }

  const handleClick = ({ currentTarget }) => {
    const to = parseInt(currentTarget.dataset.position, 10)
    scroll({ to })
  }

  const getPosition = to => {
    const to = document.querySelector(to)
    return el.offsetParent.offsetTop + el.offsetTop
  }

  // -----------------------------------------------

  window.requestAnimationFrame(handleResize)
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)

  for (const $link of $links)
    $link.addEventListener('click', handleClick)
}
