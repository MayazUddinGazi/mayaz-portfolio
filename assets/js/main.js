const button = document.querySelector('.menu-button');
const navigation = document.querySelector('#site-nav');

if (button && navigation) {
  button.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    });
  });
}
