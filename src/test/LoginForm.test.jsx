import { fireEvent, render, screen } from '@testing-library/react'
import {describe, expect, test, vi} from 'vitest'
import LoginForm from '../Components/LoginForm'

describe('Testing elements in LoginForm', () => {
    test('Should render title', () => {
        render(<LoginForm/>)
        const title = screen.getByText(/debe loguear/i)
        expect(title).toBeVisible()
    })
    test('Should render first input', () => {
        render(<LoginForm/>)
        const email = screen.getByRole('email')
        expect(email).toBeDefined()
    })
    test('Should change second input', () => {
        render(<LoginForm/>)
        const pass = screen.getByTestId('pass')
        fireEvent.change(pass, {target: {value: 'ejemplo123'}})
        expect(pass.value).toBe('ejemplo123')
    })
    test('Should call function from button', () => {
        const handleClick = vi.fn(() => {})
        render(<LoginForm handleClick={handleClick}/>)
        const button = screen.getByText('Enviar')
        fireEvent.click(button)
        expect(handleClick).toBeCalledTimes(1)
    })
})
