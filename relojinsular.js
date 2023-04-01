function mostrarHora() {
    const resultado = document.getElementById('resultado');
    
    fetch('http://worldtimeapi.org/api/timezone/Pacific/Easter')
    .then(response => response.json())
    .then(data => {
      console.log(data.datetime);
      //dividir datatime en fecha y hora
      var time = data.datetime.split('T');
      time = time[1].split('.');
      time = time[0].split(':');
      resultado.innerHTML = `
        ${time[0]}:${time[1]}
      `;
    })
  
    .catch(error => console.error(error));
    setTimeout(mostrarHora, 1000);
  }
  window.onload = mostrarHora;
  