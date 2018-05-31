import React from 'react'
import { connect } from 'react-redux'
import * as Form from '../components/Form/Form'
import slides from '../config/slides'

import { updateForm } from '../actions/applicationAction'

class FormPage extends React.Component {
  state = {
    pageIndex: 1
  }

  nextPage = () => {
    if (this.state.pageIndex < slides.length) {
      this.setState({
        pageIndex: this.state.pageIndex + 1
      })
    }
  }

  prevPage = () => {
    if (this.state.pageIndex > 1) {
      this.setState({
        pageIndex: this.state.pageIndex - 1
      })
    }
  }

  renderComponent = (currentSlide) => {
    const { selectedApp, updateForm } = this.props
    const Element = Form[currentSlide.component] || Form.TextInput

    return <Form.QuestionWrapper>
      <Form.Label label={currentSlide.label} />
      <Form.ComponentWrapper>
        <Element
          onChange={(value) => updateForm(selectedApp.appId, currentSlide.id, value)}
          value={selectedApp[currentSlide.id] || ''} />
      </Form.ComponentWrapper>

    </Form.QuestionWrapper>
  }

  render() {
    const currentSlide = slides[this.state.pageIndex - 1]

    return (
      <Form.Container>

        <Form.Content>
          {this.renderComponent(currentSlide)}
        </Form.Content>

        <Form.Footer>
          <Form.Direction direction={'left'} onClick={this.prevPage} />
          <Form.Direction direction={'right'} onClick={this.nextPage} />
        </Form.Footer>

      </Form.Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedApp: state.application.apps.find(app => {
      return app.appId === state.application.selectedId
    }) || {},
    // selectedId: state.application.selectedId
  }
}

const mapDispatchToProps = {
  updateForm
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)