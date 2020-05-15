import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Action from './Action'
import { act } from 'react-dom/test-utils'

it('Should render action', () => {
  const { container, debug, getByText } = render(<Action />)

  const button = getByText('Invocar').closest('button')
  fireEvent.click(button)

  expect(getByText('Você não tem todas as esferas para invocar o shenlong')).toBeTruthy()

  const backButton = getByText('Voltar').closest('button')
  fireEvent.click(backButton)

  expect(getByText('Invocar shenlong')).toBeInTheDocument()
})