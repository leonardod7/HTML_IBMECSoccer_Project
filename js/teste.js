// 1) ====================================================================================

const elenco_feminino = jogadores.filter((j) => j.elenco == 'feminino');
const elenco_masculino = jogadores.filter((j) => j.elenco == 'masculino');

// Função para criarmos o card do atleta e atribuir para a mesma página, porém, ocultando o conteúdo existente
// como se estivéssemos criando uma nova página
function mostrarAtletaFem(atletaDados) {

  console.log(document.getElementById("image-container-fem").style.display);

    // Criando a div para colocar a foto, o nome do atleta e o botão de fechar (voltar)
  const atletaDiv = document.createElement('div');
  // formatando a div
  atletaDiv.style.width = '50%';
  atletaDiv.style.height = '600px';
  atletaDiv.style.marginTop = '10px';
  atletaDiv.style.marginLeft = '10px';
  atletaDiv.style.backgroundColor = 'dark gray';
  // atletaDiv.style.border = '3px #ffcc00 solid';
  // atletaDiv.style.borderRadius = '10px';
  atletaDiv.style.padding = '5px';
  atletaDiv.style.textAlign = 'center';
  atletaDiv.style.display = 'grid';
  atletaDiv.style.gridTemplateRows = '1fr';

  // Atribuindo a foto da atleta para a propriedade src
  const fotoAtleta = document.createElement('img');
  // formatando a foto
  fotoAtleta.src = atletaDados.imagem;
  fotoAtleta.style.marginTop = '10px';
  fotoAtleta.style.alignItems = 'center';
  fotoAtleta.style.alignContent = 'center';
  fotoAtleta.style.padding = '5px';
  fotoAtleta.style.margin = 'auto'


  // Atribuindo o nome do atleta
  const nome = document.createElement('p');
  nome.innerText = atletaDados.nome;
  nome.style.color = '#ffcc00';
  nome.style.marginTop = '10px';


  // Criando o botão de fechar
  const botaoFechar = document.createElement('button');

  // Formatando o botao
  botaoFechar.innerText = "fechar";
  botaoFechar.style.backgroundColor = '#ffcc00';
  botaoFechar.style.width = '100px';
  botaoFechar.style.border = '3px #ffcc00 solid';
  botaoFechar.style.borderRadius = '10px';
  botaoFechar.style.marginTop = '10px';
  botaoFechar.style.margin = 'auto'


  // Criando div com as informacoes dos atletas
  const divInfo = document.createElement('div');
  // formatando a div
  divInfo.style.width = 'auto';
  divInfo.style.height = '150px';
  divInfo.style.marginTop = '10px';
  divInfo.style.marginLeft = '10px';
  divInfo.style.marginRight = '10px';
  // divInfo.style.backgroundColor = 'dark gray';
  // divInfo.style.border = '3px #ffcc00 solid';
  // divInfo.style.borderRadius = '10px';
  divInfo.style.padding = '5px';
  divInfo.style.textAlign = 'center';

  // Criando as informaces dos atletas, para adicionarmos na divInfo
  const InfoAtleta = document.createElement('p');
  InfoAtleta.innerText = atletaDados.descricao;
  InfoAtleta.style.color = '#ffcc00';
  InfoAtleta.style.padding = '15px';


  // Criando a função para fechar
  botaoFechar.onclick = function(ev) {
    document.getElementById("listaElenco").style.display = '';
    document.getElementById("image-container-fem").style.display = '';
    document.getElementById("image-container-masc").style.display = '';
    document.getElementById("Titulo-masc").style.display = '';
    document.getElementById("Titulo-fem").style.display = '';
    atletaDiv.remove();
  }

  // Adicionando os elementos botão na div
  atletaDiv.appendChild(botaoFechar);
  // Adicionando a foto do atleta para a div
  atletaDiv.appendChild(fotoAtleta);
  // Adicionando o nome do atleta para a div
  atletaDiv.appendChild(nome);
  // Adicionando as informacoes dos atletas na div de informacoes
  divInfo.appendChild(InfoAtleta);
  // Adicionando o botão na div principal
  atletaDiv.appendChild(divInfo);


  document.getElementById("mainContainer").appendChild(atletaDiv);
  document.getElementById("listaElenco").style.display = 'none';
  document.getElementById("image-container-fem").style.display = 'none';
  document.getElementById("image-container-masc").style.display = 'none';
  document.getElementById("Titulo-masc").style.display = 'none';
  document.getElementById("Titulo-fem").style.display = 'none';

}

function mostrarAtletaMas(atletaDados) {

  console.log(document.getElementById("image-container-masc").style.display);

  // Criando a div para colocar a foto, o nome do atleta e o botão de fechar (voltar)
  const atletaDiv = document.createElement('div');
  // formatando a div
  atletaDiv.style.width = '50%';
  atletaDiv.style.height = '600px';
  atletaDiv.style.marginTop = '10px';
  atletaDiv.style.marginLeft = '10px';
  atletaDiv.style.backgroundColor = 'dark gray';
  // atletaDiv.style.border = '3px #ffcc00 solid';
  // atletaDiv.style.borderRadius = '10px';
  atletaDiv.style.padding = '5px';
  atletaDiv.style.textAlign = 'center';
  atletaDiv.style.display = 'grid';
  atletaDiv.style.gridTemplateRows = '1fr';

  // Atribuindo a foto da atleta para a propriedade src
  const fotoAtleta = document.createElement('img');
  // formatando a foto
  fotoAtleta.src = atletaDados.imagem;
  fotoAtleta.style.marginTop = '10px';
  fotoAtleta.style.alignItems = 'center';
  fotoAtleta.style.alignContent = 'center';
  fotoAtleta.style.padding = '5px';
  fotoAtleta.style.margin = 'auto'


  // Atribuindo o nome do atleta
  const nome = document.createElement('p');
  nome.innerText = atletaDados.nome;
  nome.style.color = '#ffcc00';
  nome.style.marginTop = '10px';


  // Criando o botão de fechar
  const botaoFechar = document.createElement('button');

  // Formatando o botao
  botaoFechar.innerText = "fechar";
  botaoFechar.style.backgroundColor = '#ffcc00';
  botaoFechar.style.width = '100px';
  botaoFechar.style.border = '3px #ffcc00 solid';
  botaoFechar.style.borderRadius = '10px';
  botaoFechar.style.marginTop = '10px';
  botaoFechar.style.margin = 'auto'


  // Criando div com as informacoes dos atletas
  const divInfo = document.createElement('div');
  // formatando a div
  divInfo.style.width = 'auto';
  divInfo.style.height = '150px';
  divInfo.style.marginTop = '10px';
  divInfo.style.marginLeft = '10px';
  divInfo.style.marginRight = '10px';
  // divInfo.style.backgroundColor = 'dark gray';
  // divInfo.style.border = '3px #ffcc00 solid';
  // divInfo.style.borderRadius = '10px';
  divInfo.style.padding = '5px';
  divInfo.style.textAlign = 'center';

  // Criando as informaces dos atletas, para adicionarmos na divInfo
  const InfoAtleta = document.createElement('p');
  InfoAtleta.innerText = atletaDados.descricao;
  InfoAtleta.style.color = '#ffcc00';
  InfoAtleta.style.padding = '15px';


  // Criando a função para fechar
  botaoFechar.onclick = function(ev) {
    document.getElementById("listaElenco").style.display = '';
    document.getElementById("image-container-fem").style.display = '';
    document.getElementById("image-container-masc").style.display = '';
    document.getElementById("Titulo-masc").style.display = '';
    document.getElementById("Titulo-fem").style.display = '';
    atletaDiv.remove();
  }

  // Adicionando os elementos botão na div
  atletaDiv.appendChild(botaoFechar);
  // Adicionando a foto do atleta para a div
  atletaDiv.appendChild(fotoAtleta);
  // Adicionando o nome do atleta para a div
  atletaDiv.appendChild(nome);
  // Adicionando as informacoes dos atletas na div de informacoes
  divInfo.appendChild(InfoAtleta);
  // Adicionando o botão na div principal
  atletaDiv.appendChild(divInfo);


  document.getElementById("mainContainer").appendChild(atletaDiv);
  document.getElementById("listaElenco").style.display = 'none';
  document.getElementById("image-container-fem").style.display = 'none';
  document.getElementById("image-container-masc").style.display = 'none';
  document.getElementById("Titulo-masc").style.display = 'none';
  document.getElementById("Titulo-fem").style.display = 'none';

}
// ==============================================================================================================

// Função para mostrar elenco masculino
function mostrarElencoMasculino() {
  mostrarElencoMasc(elenco_masculino);
}

// Função para mostrar elenco feminino
function mostrarElencoFeminino() {
  mostrarElencoFem(elenco_feminino);
}


// ==============================================================================================================


// Função para exibir os cards na página
function mostrarElencoFem(elenco) {

  // // Acessando o container
  const container = document.getElementById("image-container-fem");

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
      mostrarAtletaFem(elenco[i]);
    }

    // Adicionar cada div para o container
    container.appendChild(imgDiv);
  }

}

function mostrarElencoMasc(elenco) {

  // // Acessando o container
  const container = document.getElementById("image-container-masc");

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
      mostrarAtletaMas(elenco[i]);
    }

    // Adicionar cada div para o container
    container.appendChild(imgDiv);
  }

}
// ==============================================================================================================


function displayImages() {
  mostrarElencoFeminino();
  mostrarElencoMasculino();
}


// ==============================================================================================================


// Vamos chamar a função para exibir as imagens ao carregar a página
window.onload = displayImages;