const lista_de_nomes = []

while(true){
    const nomes = prompt("digite um nome ou sair pra encerrar")
    if (nomes==="sair"){
        break
    }
    lista_de_nomes.push(nomes)
    console.log(lista_de_nomes)
}

for (let i=0; i<lista_de_nomes.length;i++){
    console.log(`${i+1}: ${lista_de_nomes[i]}`)
}

for (nome of lista_de_nomes){
    console.log(`bem vindo(a) ${nome}`)
}