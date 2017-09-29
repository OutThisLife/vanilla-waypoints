# Vanilla Waypoints

Uses reverse-regression to determine which 'waypoint' is active, rather than testing against any DOM at all.

# Usage

JS:
```javascript
const $navLinks = document.querySelectorAll('.waypoint')
vWaypoints($navLinks)
```

HTML:
```HTML
<nav>
  <a href='javascript:;' className='waypoint' data-to='#waypoint-1'>
    Go to Waypoint 1
  </a>

  <a href='javascript:;' className='waypoint' data-to='#waypoint-2'>
    Go to Waypoint 2
  </a>

  <a href='javascript:;' className='waypoint' data-to='#waypoint-3'>
    Go to Waypoint 3
  </a>
</nav>
```
