let musica = document.querySelector('audio');

document.querySelector('.circle').addEventListener('click', tocarMusica);

document.querySelector('.none').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

function tocarMusica() {
    musica.play();
    document.querySelector('.none').style.display = 'initial';
    document.querySelector('.circle').style.display = 'none';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.circle').style.display = 'initial';
    document.querySelector('.none').style.display = 'none';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = (musica.currentTime / musica.duration) * 100 + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
    let tempoFinal = document.querySelector('.fim');
    tempoFinal.textContent = segundosParaMinutos(Math.floor(musica.duration));
}

function segundosParaMinutos(segundos) {
    let campoMinuto = Math.floor(segundos / 60);
    let campoSegundos = Math.floor(segundos % 60);
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinuto+':'+campoSegundos;
}