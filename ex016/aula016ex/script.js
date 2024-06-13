let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

function isNumero(n){
   if(Number(n) >= 1 && Number(n) <= 100) {
    return true
   } else{
     return false
   }
}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != - 1) {
        return true
    } else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inlista(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement("option")
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = " "
    } else {
        window.alert("valor invalido ou ja encontrado na lista")
    }
    num.value = " " //para o numero ser apagado quando for digitado
    num.focus()     //para a barra onde o numero esta "piscar" ficar selecionada
}

    function finalizar() {
        if(valores.length == 0) {
            window.alert("adicione valores antes de finalizar!")
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor =  valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior)
                    maior = valores[pos]
                if (valores[pos] < menor)
                  menor = valores[pos]  
                }
                media = soma/ tot
            res.innerHTML = " "
            res.innerHTML += `<p> ao todo, temos ${tot} numero cadastrados</p>`
            res.innerHTML += `<p>O maior valor informado e ${maior}</p>`
            res.innerHTML += `<p>O menor valor informado e ${menor}</p>`
            res.innerHTML += `<p>somando todos os valores temos: ${soma}</p>`
            res.innerHTML += `<p>a media dos valores informado e ${media}</p>`
        }
    }
