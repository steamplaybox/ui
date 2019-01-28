
async function fetchData(url) {
  const response = await fetch(
    url,
    {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  .then((data) => {
    console.log('fetched: ', data);
    return data;
  })
  .catch((err) => {
    console.log('ERROR_: ', err.status,' ', err);
    return data;
  });

  return await response.json();
}
export default fetchData;