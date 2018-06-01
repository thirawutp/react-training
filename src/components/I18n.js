import React from 'react'
import { connect } from 'react-redux'
import template from '../config/i18n'

const I18n = props => {
  const { language, children } = props

  const label = template[language][children] || children
  return <span>
    {label}
  </span>
}

const mapStateToProps = state => {
  return {
    language: state.ui.lang
  }
}

export default connect(mapStateToProps, {})(I18n)