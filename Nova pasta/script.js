
const imagens = document.querySelectorAll('.carousel-image');
let indiceAtual = 0;

function mostrarImagem(indice) {
  imagens.forEach((img, i) => {
    img.classList.toggle('active', i === indice);
  });
}

function proximoSlide() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  mostrarImagem(indiceAtual);
}

mostrarImagem(indiceAtual);

setInterval(proximoSlide, 4000);



function criarCoracao() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  

  heart.style.left = Math.random() * window.innerWidth + 'px';
  
 
  const duracao = 4000 + Math.random() * 3000;
  heart.style.animationDuration = duracao + 'ms';
  
  
  const tamanho = 15 + Math.random() * 15;
  heart.style.width = tamanho + 'px';
  heart.style.height = tamanho + 'px';
  
  document.body.appendChild(heart);
  

  setTimeout(() => {
    heart.remove();
  }, duracao);
}

setInterval(criarCoracao, 350);
