function pesquisar(){

    let section = document.getElementById("resultados-pesquisa")

   let campoPesquisa = document.getElementById("campo-pesquisa").value

   if(campoPesquisa == ""){
    section.innerHTML = "Nenhuma música encontrada. Você não procurou nenhuma música"
    return 
   }
   campoPesquisa = campoPesquisa.toLowerCase()

   console.log(campoPesquisa)

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let autor = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        autor = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

       if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || autor.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
                <h2> ${dado.titulo} </h2>
                <h3><a href=${dado.linkautor} target="_blank"> ${dado.autor}</a></h3>
                <p class="descricao-meta">${dado.descricao}</p>
                <button class="btn-escutar"><a href=${dado.link} target="_blank">Escute</a></button>
                </div>
        `
        }
        if(!resultados){
            resultados = "<p>Nenhuma música encontrada.</p>"

        }

       }

        
    
    section.innerHTML = resultados
}

/* console.log(dados); */

