document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  const year = new Date().getFullYear();
  footer.innerHTML = `© ${year} My Website`;
});