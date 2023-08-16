const navbar = document.querySelector('.navegacao');

function updateNavbar() {
    const scrollY = window.scrollY;

    if (scrollY <= 0) {
        navbar.style.backgroundColor = 'rgba(48, 119, 171, 1)';
       
    } else {
        navbar.style.backgroundColor = `rgba(48, 119, 171, 0.4)`;
    }
}

// Adicionar transição de estilo suave à barra de navegação
navbar.style.transition = 'background-color 0.3s ease';

// Chamar a função quando a página é carregada
window.addEventListener('load', updateNavbar);

// Atualizar a cada rolagem
window.addEventListener('scroll', updateNavbar);

// Atualizar a cada hover na barra de navegação (ul)
navbar.addEventListener('mouseenter', () => {
    navbar.style.backgroundColor = 'rgba(48, 119, 171, 1)';
});

navbar.addEventListener('mouseleave', () => {
    updateNavbar(); // Atualiza conforme a posição do scroll
});