const btnTopo = document.getElementById("btn-topo");

/* mostrar o botão quando o scroll passa de 200px */
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) { /* scroll 200px */
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

/* rolagem suave até o topo */
btnTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

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