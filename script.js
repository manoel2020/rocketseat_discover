let btnPerfil = document.querySelector("#switch button")

btnPerfil.onclick = () => {
  let perfil = document.documentElement.getAttribute("class")

  document.documentElement.setAttribute(
    "class",
    perfil == "light" ? null : "light"
  )
}
