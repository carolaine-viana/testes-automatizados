import { expect } from '@playwright/test'

type ValidationErrors = Array<{
  [s: string]: string
}>

export const expectRequireds = async (errors: ValidationErrors, fields: string[]) => {
  errors.forEach((error) => {
    const [entries] = Object.entries(error)

    expect(fields).toContain(entries[0])
    expect(entries[1]).toBe('required')
  })
}
