const usersResponse = {
  results: [
    {
      email: 'c-test-3@test.com',
      name: { first: 'test-3', last: 'user-3' },
      location: { city: 'stockholm' },
      picture: { large: 'https://randomuser.me/api/portraits/men/69.jpg' },
    },
    {
      email: 'a-test-1@test.com',
      name: { first: 'test-1', last: 'user-1' },
      location: { city: 'tokyo' },
      picture: { large: 'https://randomuser.me/api/portraits/men/5.jpg' },
    },
    {
      email: 'b-test-2@test.com',
      name: { first: 'test-2', last: 'user-2' },
      location: { city: 'lisbon' },
      picture: { large: 'https://randomuser.me/api/portraits/men/65.jpg' },
    },
  ],
}

export default async function mockFetch(url) {
  if (url.startsWith('https://randomuser.me/') && url.includes('results')) {
    return {
      ok: true,
      status: 200,
      json: async () => usersResponse,
    }
  }

  throw new Error(`Unhandled request: ${url}`)
}
