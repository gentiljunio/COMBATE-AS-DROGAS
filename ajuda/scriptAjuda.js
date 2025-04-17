
  function mostrarPopup() {
    document.getElementById('popup').style.display = 'flex';
    return false; // impede envio real para testar visualmente
  }

  function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
  }

  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Verifica o tema salvo no localStorage ao carregar a página
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }

  // Alterna o tema e salva no localStorage
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      toggleButton.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      toggleButton.textContent = '🌙';
    }
  });
