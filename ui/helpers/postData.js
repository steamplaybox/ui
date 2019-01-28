async function postData(url, data) {
  const response = await fetch(
    url,
    {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  .then(data => {
    console.log('data posted, data recieved: ', data);
    return data;
  })
  .catch(err => {
    console.log('ERROR_: ', err.status, ' ', err);
    return err;
  })
}