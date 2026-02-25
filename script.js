const wishlistBtn = document.getElementById('wishlistBtn');
const feedback = document.getElementById('feedback');
const stealBtn = document.getElementById('stealBtn');
const result = document.getElementById('result');

wishlistBtn.addEventListener('click', () => {
  feedback.textContent = 'Ajouté ! Tu es prêt à voler ton premier Brainrot.';
});

const outcomes = [
  'Succès légendaire : +500 style, Brainrot sécurisé.',
  'Tu as été repéré... retraite stratégique !',
  'Vol propre ! Personne ne t’a vu.',
  'Brainrot récupéré, mais tu as glissé sur une banane cosmique.'
];

stealBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * outcomes.length);
  result.textContent = outcomes[randomIndex];
});
