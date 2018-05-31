import React from 'react'
import _ from 'lodash'

import styles from './AppDetail.scss'

const LabelGroup = props => {
  const { label, value } = props
  return (
    <div className={styles['label-group']}>
      <label className={styles['label-title']}>
        {label}
      </label>
      <label className={styles['text']}>
        {value}
      </label>
    </div>
  )
}

const AppDetail = props => {
  const { selectedApp } = props

  return (
    <div className={styles['app-detail']}>
      {
        !_.isEmpty(selectedApp) &&
        <div className={styles['container']}>
          <div className={styles['title']}>
            Application
          </div>
          {
            Object.keys(selectedApp).map(item => {
              return (
                <LabelGroup label={item} value={selectedApp[item]} />
              )
            })
          }
          <div className={styles['control-bar']}>
            <button
              className={styles['edit-btn']}
              onClick={() => props.router.push('/form')}
            >edit</button>
            <button
              className={styles['delete-btn']}
              onClick={() => props.deleteApp(selectedApp.appId)}
            >delete</button>
          </div>
        </div>
      }
    </div>
  )
}

export default AppDetail