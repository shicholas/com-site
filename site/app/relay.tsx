import { Environment as RelayEnvironment, Network, RecordSource, Store } from 'relay-runtime'

async function fetchGraphQL (text, variables) {
  const HYGRAPH_ENDPOINT = 'https://api-us-west-2.hygraph.com/v2/cleh5w2581mb901t6boooai0m/master'

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: text,
      variables
    })
  })

  // Get the response as JSON
  return await response.json()
}

async function fetchRelay (params, variables) {
  return await fetchGraphQL(params.text, variables)
}

export const environment = new RelayEnvironment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
})
