let valores = [8, 1, 7, 4, 2, 9]

/*
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`a posiçao ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){//esse codigo e uma verso mais simplificada
    console.log(`a posiçao ${pos} tem o valor ${valores[pos]}`)
}