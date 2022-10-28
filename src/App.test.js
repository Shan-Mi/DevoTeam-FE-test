import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import mockFetch from './mocks/mockFetch'
import App from './App'

let windowFetchSpy

beforeEach(() => {
  windowFetchSpy = jest.spyOn(window, 'fetch').mockImplementation(mockFetch)
})

afterEach(() => {
  jest.restoreAllMocks()
})

test('renders title text', async () => {
  render(<App />)
  const titleElement = screen.getByText(/Meet the Team/i)
  expect(titleElement).toBeInTheDocument()
})

test('first render, results is sorted by asc, first user should be "test-1 user-1"', async () => {
  render(<App />)
  expect(screen.getByTestId('sort')).toBeInTheDocument()

  await waitFor(() =>
    expect(screen.getByTestId('list-card-name-1')).toHaveTextContent(
      'test-1 user-1'
    )
  )
})

test('if click sort button, last card should have the name "test-1 user-1"', async () => {
  render(<App />)
  expect(screen.getByTestId('sort')).toBeInTheDocument()
  fireEvent.click(screen.getByTestId('sort'))

  await waitFor(() =>
    expect(screen.getByTestId('list-card-name-3')).toHaveTextContent(
      'test-1 user-1'
    )
  )
})

test('if click view swither icon, you should see thumbnailCards', async () => {
  render(<App />)
  expect(screen.getByTestId('sort')).toBeInTheDocument()
  fireEvent.click(screen.getByTestId('switcher'))

  await waitFor(() =>
    expect(screen.getByTestId('thumbnail-card-1')).toHaveTextContent(
      'test-1 user-1'
    )
  )
})

test('if search "test-1 user-1", you should only see 1 result been listed out', async () => {
  render(<App />)
  const input = screen.getByTestId('search')
  expect(input).toBeInTheDocument()
  expect(input.value).toBe('')
  fireEvent.change(input, { target: { value: 'test-1' } })

  await waitFor(() =>
    expect(screen.getByTestId('list-card-1')).toHaveTextContent('test-1 user-1')
  )
  expect(screen.queryByTestId('list-card-2')).not.toBeInTheDocument()
})
