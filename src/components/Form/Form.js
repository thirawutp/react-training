import React from 'react'
import styles from './Form.scss'
import I18n from '../I18n'

export const TextInput = props => {
  const onChange = (event) => {
    props.onChange(event.target.value)
  }
  return <input
    className={styles['form-input']}
    type={props.type || 'text'}
    placeholder={props.placeholder}
    value={props.value}
    onChange={onChange}
    style={props.style}
    />
}

export const NumberInput = props => {
  const { validateFn = f => f } = props
  const validateMsg = validateFn(props.value)
  return <div>
    <TextInput
      type='number'
      value={props.value}
      onChange={props.onChange}
      {...props}
      />
      { validateMsg &&
        <div style={{ color: 'red'}}>
          <I18n>{validateMsg}</I18n>
        </div>
      }
    </div>
}

export const Container = props => {
  return <div className={styles['form-container']}>
    {props.children}
  </div>
}

export const Content = props => {
  return <div className={styles['form-content']}>
    {props.children}
  </div>
}

export const Footer = props => {
  return <div className={styles['form-footer']}>
    {props.children}
  </div>
}

export const Direction = props => {
  const { direction, onClick } = props

  const style = { float: direction }
  const content = direction === 'left' ? '<' : '>'

  return <div
    className={styles['footer-direction']}
    onClick={onClick}
    style={style}>
    {content}
  </div>
}

export const QuestionWrapper = props => {
  return <div className={styles['question-wrapper']}>
    {props.children}
  </div>
}

export const Label = props => {
  return <label className={styles['question-label']}>
    {props.label}
  </label>
}

export const ComponentWrapper = props => {
  return <div className={styles['component-wrapper']}>
    {props.children}
  </div>
}


export const Option = props => {
  const { list = [] } = props
  const style = {
    background: '#0D98BA',
    color: 'white'
  }
  return (
    <div className={styles['form-option']}>
      {list.map((item, index) =>
        <div 
          key={index} 
          style={props.value === item.value ? style : {}}
          onClick={() => props.onChange(item.value)}
          > 
          {item.label}
        </div>
      )}
    </div>
  )
}
