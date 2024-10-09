// Código para imprimir dinamicamente os responsáveis pelo projeto apenas adicionando as informações no array abaixo para logo em seguida aparecer na tela
// Lista de colaboradores, cada um como objeto e com seus respectivos atributos: Nome, link de github, icon de conta do Github
const colaboradores = [
    {
        nome: "VSRohod",
        github: "https://github.com/VSRohod",
        icon: "https://avatars.githubusercontent.com/u/89645335?v=4"
    },
    {
        nome: "PedroGabrielsds",
        github: "https://github.com/PedroGabrielsds",
        icon: "https://avatars.githubusercontent.com/u/177778503?v=4"
    }
]

// repetição para dinamicamente ver os colaboradores da lista e  criar um card para cada um com suas respectivas informações
colaboradores.forEach((colaborador) => {
    document.getElementById("colaboradoresLista").innerHTML += `
    <a href="${colaborador.github}">
        <div class="card border-0" style="width: 6rem;">
            <img src="${colaborador.icon}" class="card-img-top rounded-circle" alt="...">
            <div class="card-body d-flex flex-column align-items-center">
                <p class="card-text">${colaborador.nome}</p>
            </div>
        </div>
    </a>
    `
})