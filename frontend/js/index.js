// Frontend service script
fetch('http://localhost:3000', {
    headers: {
      'Content-Type': 'application/json'
    }
}).then(response => response.json()).then(response => {
    document.querySelector('body').style.background = response.color;
});