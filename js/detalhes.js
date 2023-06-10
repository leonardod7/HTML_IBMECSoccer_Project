// 1) ====================================================================================

const elenco_feminino = jogadores.filter((j) => j.elenco == 'feminino');
const elenco_masculino = jogadores.filter((j) => j.elenco == 'masculino');

function mostrarAtleta(atletaDados) {

  console.log(document.getElementById("image-container").style.display);

  const atletaDiv = document.createElement('div');

  atletaDiv.style.width = '200px';
  atletaDiv.style.height = '200px';
  atletaDiv.style.top = '10px';
  atletaDiv.style.left = '10px';
  atletaDiv.style.backgroundColor = '#ffffff';

  const fotoAtleta = document.createElement('img');
  fotoAtleta.src = atletaDados.imagem;
  fotoAtleta.width = 100;
  atletaDiv.appendChild(fotoAtleta);

  const nome = document.createElement('p');
  nome.innerText = atletaDados.nome;
  atletaDiv.appendChild(nome);

  const botaoFechar = document.createElement('button');
  botaoFechar.innerText = "fechar";
  botaoFechar.onclick = function(ev) {
    document.getElementById("listaElenco").style.display = '';
    document.getElementById("image-container").style.display = '';
    atletaDiv.remove();
  }
  atletaDiv.appendChild(botaoFechar);

  document.getElementById("mainContainer").appendChild(atletaDiv);
  document.getElementById("listaElenco").style.display = 'none';
  document.getElementById("image-container").style.display = 'none';

}


// 2) ====================================================================================

function mostrarElencoMasculino() {
  mostrarElenco(elenco_masculino);
}

function mostrarElencoFeminino() {
  mostrarElenco(elenco_feminino);
}


// 2.1) Função para exibir os cards na página
function mostrarElenco(elenco) {

  // Acessando o container
  const container = document.getElementById("image-container");

  // Loop para exibir todas as imagens
  for (let i = 0; i < elenco.length; i++) {

    // criar uma tag H2 para o nome das jogadras
    const nomeAtleta = document.createElement("h2");
    // Formatar a tag h2
    nomeAtleta.style.color = '#ffcc00'
    nomeAtleta.style.textAlign = 'center'
    nomeAtleta.style.fontSize = '12px'

    // Adicionar para a propriedade
    nomeAtleta.innerHTML = elenco[i].nome;

    // Criar uma div para cada imagem
    const imgDiv = document.createElement("div");
    // Vamos formatar a tag div
    imgDiv.style.border = '3px #ffcc00 solid'
    imgDiv.style.borderRadius = '10px'
    imgDiv.style.padding = '5px'
    imgDiv.style.background = "dark gray"


    // Criar um elemento de imagem
    const imgElement = document.createElement("img");
    // Vamos formatar a imagem
    imgElement.style.padding = '10px';
    imgElement.style.borderRadius = '10px';
    // Adicionar para a propriedade src cada endereço URL da imagem

    imgElement.src = elenco[i].imagem;

    // Adicionar cada imagem para uma div
    imgDiv.appendChild(imgElement);
    imgDiv.appendChild(nomeAtleta);

    imgDiv.onclick = function(ev) {
      mostrarAtleta(elenco[i]);
    }

    // Adicionar cada div para o container
    container.appendChild(imgDiv);
  }
}

function displayImages() {
  mostrarElencoFeminino();
  mostrarElencoMasculino();

}

// 2.2) Vamos chamar a função para exibir as imagens ao carregar a página
window.onload = displayImages;
