export function getVisitorCount() {
  return fetch(`${process.env.GATSBY_API_ENDPOINT}/count`, {
    method: 'GET',
  }).catch(err => console.log(err))
}