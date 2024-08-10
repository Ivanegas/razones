let currentCard = 0;

function showNextCard(index) {
    const cards = document.querySelectorAll('.card');
    if (index < cards.length - 1) {
        cards[index].style.display = 'none';
        cards[index + 1].style.display = 'block';
    }
}

function redirectToPage() {
    window.location.href = 'index2.html'; // Reemplaza con la URL de la página a la que deseas redirigir
}