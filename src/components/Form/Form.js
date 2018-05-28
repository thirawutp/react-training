import React from 'react'
import styles from './Form.scss'

export const TextInput = props => {
  return <input className={styles['form-input']} />
}

export const NumberInput = props => {
  return <TextInput type='number' />
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
  const { direction } = props

  const style = { float: direction }
  const content = direction === 'left' ? '<' : '>'

  return <div className={styles['footer-direction']} style={style}>
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
