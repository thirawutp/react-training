import React from 'react'
import styles from './AppList.scss'

const AppList = props => {
  return (
    <div className={styles['app-list']}>
      <div className={styles['list']}>
        {
          props.apps.map(app => {
            const isActive = app.appId === props.selectedId
            const activeStyle = isActive
              ? {
                color: '#fff',
                background: '#0D98BA'
              }
              : {}
            return (
              <div
                onClick={() => props.setSelectedId(app.appId)}
                className={styles['item']}
                style={activeStyle}
                key={app.appId}
              >
                {app.appId}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AppList