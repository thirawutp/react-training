import React from 'react'
import * as Form from '../components/Form/Form'

class FormPage extends React.Component {
  render() {
    return (
      <Form.Container>

        <Form.Content>
          <Form.QuestionWrapper>

            <Form.Label label={'คำถามมมมมมมมมมมมม'} />

            <Form.ComponentWrapper>
              <Form.TextInput />
            </Form.ComponentWrapper>

          </Form.QuestionWrapper>
        </Form.Content>

        <Form.Footer>
          <Form.Direction direction={'left'} />
          <Form.Direction direction={'right'} />
        </Form.Footer>

      </Form.Container>
    )
  }
}

export default FormPage