alert("Boas vindas")

let sair = false

while (!sair)
{
    const nome = prompt("Qual é o seu nome?")
    const bebida = prompt(`Olá, ${nome}. Qual bebida você deseja?`)

    const acucar = prompt("Deseja adicionar açucar? (s/n)")

    if (acucar === "s" || acucar === "S")
        alert("O açucar será adicionado")
    else if (acucar === "n" || acucar === "N")
        alert("Não será adicionado açucar")

    
    const acomp = prompt("Deseja um acompanhamento? (s/n)")

    if (acomp === "s" || acomp === "S"){
        const nomeAcomp = prompt("Qual acompanhamento você deseja?")
        alert(`${nomeAcomp} será adicionado`)
    }
    else if (acomp === "n" || acomp === "N")
        alert("Não será adicionado acompanhamento")

    const sair = prompt("Deseja fazer outro pedido? (s/n)")

    if (acomp === "n" || acomp === "N"){
        alert("Até a próxima")
        sair = true
    }

}