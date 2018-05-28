import React from 'react'
import { Link } from 'react-router'
import styles from './Header.scss'

const Header = props => {
  return (
    <div>
      <nav className={styles['header-bar']}>
        <div>
          <Link to='/'>
            E-Application
          </Link>
        </div>
      </nav>
      {props.children}
    </div>
  )
}

export default Header