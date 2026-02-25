const wishlistButton = document.querySelector('#wishlist');
const statusText = document.querySelector('#status');

if (wishlistButton && statusText) {
  wishlistButton.addEventListener('click', () => {
    statusText.textContent = '✅ Ajouté ! Tu recevras une alerte dès l\'ouverture des précommandes.';
    wishlistButton.disabled = true;
    wishlistButton.textContent = 'Dans la wishlist';
  });
}
