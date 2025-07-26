
  const abrirBtn = document.getElementById('abrir');
  const cerrarBtn = document.getElementById('cerrar');
  const navLinks = document.querySelector('.nav-link');

  abrirBtn.addEventListener('click', () => {
    navLinks.classList.add('visible');
  });

  cerrarBtn.addEventListener('click', () => {
    navLinks.classList.remove('visible');
  });

