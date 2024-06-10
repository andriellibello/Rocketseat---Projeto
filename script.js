function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');
  
  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, add a imagem light
    img.setAttribute('src', './assets/assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos escuros, jaqueta, barba e fundo azul.')
  } else {
    // se não, manter a imagem normal
    img.setAttribute('src', './assets/assets/avatar.png')
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos, camisa preta, barba e fundo amarelo.')
  }
}
