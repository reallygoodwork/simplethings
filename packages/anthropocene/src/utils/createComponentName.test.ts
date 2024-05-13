import { createComponentName } from "./createComponentName"

describe('createComponentName', () => {
  it('it should return string a with a capitalized first letter', () => {
    expect(createComponentName('badge')).toBe('Badge')
  })

  it('it should return string a with a capitalized first letter and camel cased remainder from a string with a space', () => {
    expect(createComponentName('hero default')).toBe('HeroDefault')
  })

  it('it should return string a with a capitalized first letter and camel cased remainder from an uppercase space with a string', () => {
    expect(createComponentName('HERO DEFAULT')).toBe('HeroDefault')
  })
})