document.getElementById("playSpotify").addEventListener("click", function () {
  toggleMusicPlayer() // Chama a função para alternar o player de música
  startDancing() // Chama a função para iniciar a animação do boneco
})

function toggleMusicPlayer() {
  var musicPlayer = document.getElementById("musicPlayer")
  if (musicPlayer.style.display === "block") {
    musicPlayer.style.display = "none"
  } else {
    musicPlayer.style.display = "block"
  }
}

function startDancing() {
  const dancingCharacter = document.getElementById("dancingCharacter")
  dancingCharacter.classList.add("animate")
  dancingCharacter.style.left = "0" // Coloca o boneco na posição inicial
}

function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./assets/avatar-light.png")
  }
}
