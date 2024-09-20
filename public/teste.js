// Seleciona as imagens do carrossel
const imagens = document.querySelectorAll('.imagem');

// Define o tempo de transição entre as imagens
const tempoTransicao = 3000; // 3 segundos

// Função para alternar as imagens
function alternarImagens() {
  // Seleciona a imagem ativa
    const imagemAtiva = document.querySelector('.imagem.ativa');

  // Remove a classe ativa da imagem atual
    imagemAtiva.classList.remove('ativa');

  // Adiciona a classe inativa à imagem atual
    imagemAtiva.classList.add('inativa');

  // Seleciona a próxima imagem
    const proximaImagem = imagemAtiva.nextElementSibling || imagens[0];

  // Adiciona a classe ativa à próxima imagem
    proximaImagem.classList.add('ativa');

  // Remove a classe inativa da próxima imagem
    proximaImagem.classList.remove('inativa');
}

// Chama a função para alternar as imagens a cada 3 segundos
setInterval(alternarImagens, tempoTransicao);