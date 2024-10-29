// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div>
      <ul className="nav-menu">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header