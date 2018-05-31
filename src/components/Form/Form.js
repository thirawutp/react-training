import React from 'react'
import styles from './Form.scss'

export const TextInput = props => {
  const onChange = (event) => {
    props.onChange(event.target.value)
  }
  return <input
    className={styles['form-input']}
    type={props.type || 'text'}
    value={props.value}
    onChange={onChange}
    style={props.style} />
}

export const NumberInput = props => {
  return <TextInput
    type='number'
    value={props.value}
    onChange={props.onChange}
    style={{ background: 'red' }} />
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
  return (
    <div className={styles['form-option']}>
      {list.map((item, index) =>
        <div key={index}> {item.label} </div>
      )}
    </div>
  )
}
