function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
   
  var hora = data.getHours()
  var minute = data.getMinutes()
    msg.innerHTML = `agora são ${hora} horas e ${minute} minutos.`
    if(hora >= 0 && hora < 12) {
        img.src = "manha - Copia.png"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora < 18) {
        img.src = "tarde.png"
        document.body.style.background = "#b9846f"
    }else {
        img.src = "noite - copia.png"
        document.body.style.background = "#515154"
    }










}