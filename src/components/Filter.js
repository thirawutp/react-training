import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './Filter.scss'
import { createApp } from '../actions/applicationAction'
import { setSearch } from '../actions/filterAction'

const Filter = props => {
  return (
    <div className={styles['filter-bar']}>
      <label>Search</label>
      <input type='text' id='text' onChange={(event) => {
        const { id, value } = event.target
        props.setSearch(id, value)
      }} />
      <label>Filter</label>
      <select id='status' onChange={(event) => console.log(event.target.id, event.target.value)}>
        <option>DR</option>
        <option>SM</option>
      </select>
      <a onClick={props.createApp}>
        Create App
      </a>
    </div>
  )
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
  createApp: dispatch(createApp()),
  setSearch: (id, value) => dispatch(setSearch(id, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)