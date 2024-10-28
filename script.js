
function expandirImagem(img) {
    var modal = document.getElementById("imagem-modal");
    var modalImg = document.getElementById("imagem-expandida");
    modal.style.display = "block";
    modalImg.src = img.src; // Carrega a imagem clicada no modal
}

function fecharModal() {
    var modal = document.getElementById("imagem-modal");
    modal.style.display = "none";
}
