function scrollToElement(elementSelector, instance = 0) {
    // Seleciona todos os elementos que correspondem ao seletor fornecido
    const elementos = document.querySelectorAll(elementSelector);
    // Verifica se existem elementos correspondentes ao seletor e se a instância solicitada existe
    if (elementos.length > instance) {
        // Rolagem até a instância especificada do elemento
        elementos[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    scrollToElement('.header');
});

link2.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    scrollToElement('.header', 1);
});

link3.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    scrollToElement('.column');
});

//Transição de imagens com bolinhas de navegação: 
const dots = document.querySelectorAll('.dot');
const images = document.querySelectorAll('.screenshots img');
let currentIndex = 0;

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        currentIndex = index;

        images[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    });
});

//Exibição do ícone de rolagem
document.addEventListener('DOMContentLoaded', function() {
    const scrollIcon = document.querySelector('.scroll-icon');
    scrollIcon.style.opacity = '1'; // Garante que o ícone comece visível

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            scrollIcon.style.opacity = '0'; // Oculta o ícone ao rolar
        } else {
            scrollIcon.style.opacity = '1'; // Mostra o ícone no topo
        }
    });
});
