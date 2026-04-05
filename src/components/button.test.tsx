import { render, screen, fireEvent } from '@testing-library/react'
import { ButtonDarkLightMode } from './button'

describe('ButtonDarkLightMode', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders the button', () => {
    render(<ButtonDarkLightMode />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('starts in light mode by default', () => {
    render(<ButtonDarkLightMode />)
    expect(document.documentElement).not.toHaveClass('dark')
    expect(localStorage.getItem('theme')).toBeNull()
  })

  it('toggles to dark mode on click', () => {
    render(<ButtonDarkLightMode />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(document.documentElement).toHaveClass('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('toggles back to light mode on second click', () => {
    render(<ButtonDarkLightMode />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    fireEvent.click(button)
    expect(document.documentElement).not.toHaveClass('dark')
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('loads dark mode from localStorage on mount', () => {
    localStorage.setItem('theme', 'dark')
    render(<ButtonDarkLightMode />)
    expect(document.documentElement).toHaveClass('dark')
  })
})