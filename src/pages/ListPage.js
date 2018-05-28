import React, { Component } from 'react'
import { connect } from 'react-redux'

import Filter from '../components/Filter'
import AppList from '../components/AppList'
import AppDetail from '../components/AppDetail'
import * as ApplicationAction from '../actions/applicationAction'

class ListPage extends Component {
  // setSelectedId = id => {
  //   this.setState({ selectedId: id })
  // }
  render() {
    const selectedApp = this.props.apps.find(app => {
      return app.appId === this.props.selectedId
    }) || {}
    const appsFiltered = this.props.apps.filter(app => {
      const searchCondition = app.appId.includes(this.props.text)
      // const filterCondtion = app.status.includes(this.props.filterStatus)
      return searchCondition
    })
    return (
      <div>
        <Filter />
        <AppList
          apps={appsFiltered}
          selectedId={this.props.selectedId}
          setSelectedId={this.props.setSelectedApp}
        />
        <AppDetail
          selectedApp={selectedApp}
          deleteApp={this.props.deleteApp}
        />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    apps: state.application.apps,
    selectedId: state.application.selectedId,
    text: state.filter.text
  }
}

const mapDispatchToProps = {
  setSelectedApp: ApplicationAction.selectedApp,
  deleteApp: ApplicationAction.deleteApp
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
