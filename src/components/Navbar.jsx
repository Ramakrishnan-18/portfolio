import { NavLink } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/',           label: 'Home' },
  { to: '/education',  label: 'Education' },
  { to: '/skills',     label: 'Skills' },
  { to: '/projects',   label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/about',      label: 'About' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        
      </div>

      <ul className="nav-links">
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' nav-link--active' : '')
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="nav-status">
        <span className="status-dot" />
         ONLINE
      </div>
    </nav>
  )
}
