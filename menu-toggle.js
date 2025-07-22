
document.addEventListener('DOMContentLoaded', () => {<script>
  const toggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-link');
  const icon = toggleButton.querySelector('i');

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Muestra u oculta el menú
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times'); // Cambia ícono a X
  });
</script>
