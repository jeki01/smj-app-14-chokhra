"use client"

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "./button"
import jest from "jest" // Import jest to fix the undeclared variable error

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByRole("button", { name: "Test Button" })).toBeInTheDocument()
  })

  it("handles click events", async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Click me</Button>)

    await user.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledTimes(1) // Corrected the method call
  })

  it("applies variant classes correctly", () => {
    render(<Button variant="destructive">Destructive Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("bg-destructive")
  })

  it("applies size classes correctly", () => {
    render(<Button size="lg">Large Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("h-11")
  })

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
  })
})
