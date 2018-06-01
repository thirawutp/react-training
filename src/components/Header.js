import React from 'react'
import { connect } from 'react-redux'
import styles from './Header.scss'

import { changeLaguage } from '../actions/uiAction'

const Header = props => {
  const gotoHome = () => props.router.push('/')
  const style = (lang) => {
    return lang === props.langauge ? { color : 'yellow' } : {}
  }
  return (
    <div>
      <nav className={styles['header-bar']}>
        <div onClick={gotoHome}>
          E-Application
        </div>
        <span>
          <label 
            style={style('en')}
            onClick={() => props.changeLaguage('en')}> 
            en 
          </label>/
          <label 
            style={style('th')}
            onClick={() => props.changeLaguage('th')}> 
            th 
          </label>
        </span>
      </nav>
      {props.children}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    langauge: state.ui.lang,
  }
}

const mapDispatchToProps = {
  changeLaguage
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)