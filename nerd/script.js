

// Atualiza o ano automaticamente no rodapé
const spanAno = document.getElementById('ano');
if (spanAno) {
  spanAno.textContent = new Date().getFullYear();
}


// Exibe o modal de cookies após 3 segundos
setTimeout(() => {
  const modalCookies = document.getElementById('modal-cookies');
  if (modalCookies) {
    modalCookies.style.display = 'block';
  }
}, 3000);

// Fecha o modal de cookies ao clicar no botão "Aceitar"
const btnAceitar = document.getElementById('btn-aceitar');
if (btnAceitar) {
  btnAceitar.addEventListener('click', () => {
    const modalCookies = document.getElementById('modal-cookies');
    if (modalCookies) {
      modalCookies.style.display = 'none';
    }
  });
}
// Fecha o modal de cookies ao clicar fora dele
window.addEventListener('click', (event) => {
  const modalCookies = document.getElementById('modal-cookies');
  if (modalCookies && event.target === modalCookies) {
    modalCookies.style.display = 'none';
  }
});