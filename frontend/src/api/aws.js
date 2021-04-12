export function getVisitorCount() {
  return fetch(`${process.env.GATSBY_API_ENDPOINT}/count`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    method: 'GET',
  }).then((res) => res.json()).catch(err => console.log(err))
}