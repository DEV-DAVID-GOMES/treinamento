var agora = new Date()
var hora = agora.getHours()
console.log(`agora sao exatamente ${hora} horas`)
if(hora <= 12) {
    console.log("bom dia!")
}else if(hora > 12 && hora <=17) {
    console.log("boa tarde!")
}else{
    console.log("boa noite!")
}