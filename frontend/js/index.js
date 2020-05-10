// Frontend service script
fetch('http://localhost:3000', {
    mode: 'no-cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json'
    }
}).then(response => {
    console.log(response);
});