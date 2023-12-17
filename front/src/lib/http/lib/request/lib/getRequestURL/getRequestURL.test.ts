import { getRequestURL } from './getRequestURL'

describe('Get URL for request', () => {
  test('URL with base URL', () => {
    expect(
      getRequestURL({ url: '/auth', baseUrl: 'https://localhost:3000' })
    ).toBe('https://localhost:3000/auth')
  })
})
