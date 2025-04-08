function mostrarParabens() {
    document.getElementById("mensagemParabens").style.display = "block";
  }
  
  function mostrarImagem() {
    document.getElementById("imagemContainer").style.display = "block";
  }
  
  function updateClock() {
    const now = new Date();
    const clock = document.getElementById("clock");
    clock.textContent = now.toLocaleTimeString();
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  