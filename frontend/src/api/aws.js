export function getVisitorCount() {
  return fetch(`${process.env.GATSBY_API_ENDPOINT}/count`, {
    method: 'GET',
  }).then((res) => res.json()).catch(err => console.log(err))
}