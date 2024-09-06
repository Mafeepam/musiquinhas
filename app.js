function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (campoPesquisa === "") {
        section.innerHTML = "Nenhuma música encontrada. Você não procurou nenhuma música";
        return;
    }

    let resultados = "";
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let autor = dado.autor.toLowerCase();
        let tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || autor.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <h3><a href="${dado.linkautor}" target="_blank">${dado.autor}</a></h3>
                <img src="${dado.imagem}" alt="Capa do álbum" style="float: right;">
                <p class="descricao-meta">${dado.descricao}</p>
                <button class="btn-escutar"><a href="${dado.link}" target="_blank">Escute</a></button>
            </div>
            `;
        }
    }

    if (resultados === "") {
        resultados = "<p>Nenhuma música encontrada.</p>";
    }

    section.innerHTML = resultados;
}

function sugerirAleatorio() {
    const section = document.getElementById("resultados-pesquisa");
    const indiceAleatorio = Math.floor(Math.random() * dados.length);
    const musicaAleatoria = dados[indiceAleatorio];

    const resultadoAleatorio = `
        <div class="item-resultado">
            <h2>${musicaAleatoria.titulo}</h2>
            <h3><a href="${musicaAleatoria.linkautor}" target="_blank">${musicaAleatoria.autor}</a></h3>
            <img src="${musicaAleatoria.imagem}" alt="Capa do álbum" style="float: right;">
            <p class="descricao-meta">${musicaAleatoria.descricao}</p>
            <button class="btn-escutar">
                <a href="${musicaAleatoria.link}" target="_blank">Escute</a>
            </button>
        </div>
    `;

    section.innerHTML = resultadoAleatorio;
}
