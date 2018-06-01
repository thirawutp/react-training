import React from 'react'
import { connect } from 'react-redux'
import * as Form from '../components/Form/Form'
import slidesConfig from '../config/slides'
import * as Selectors from '../selectors'

import { updateForm } from '../actions/applicationAction'

class FormPage extends React.Component {
  state = {
    pageIndex: 1
  }

  nextPage = () => {
    if (this.state.pageIndex < this.props.slides.length) {
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
    // const Element = Form[currentSlide.component] || Form.TextInput

    return <Form.QuestionWrapper>
      <Form.Label label={currentSlide.label} />
      <Form.ComponentWrapper>
        {currentSlide.component.map((c, index) => {
          const Element = Form[c]
          const { props = {} } = currentSlide
          return (
            <Element
              key={index}
              {...props[index]}
              onChange={(value) => updateForm(
                selectedApp.appId,
                currentSlide.id[index],
                value
              )}
              value={selectedApp[currentSlide.id[index]] || ''}
            />
          )
        })}
      </Form.ComponentWrapper>

    </Form.QuestionWrapper>
  }

  render() {
    const currentSlide = this.props.slides[this.state.pageIndex - 1]
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
  const selectedApp = state.application.apps.find(app => {
    return app.appId === state.application.selectedId
  }) || {}

  const slides = slidesConfig.filter(s => {
    if (typeof s.condition === 'string') {
      return Selectors[s.condition](selectedApp)
    }
    return s.condition
  })

  return {
    selectedApp,
    slides
  }
}

const mapDispatchToProps = {
  updateForm
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)