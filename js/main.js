//start ofeers section
const offers = document.querySelector('.offers-items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;
function slide(to) {
    const total = offers.children.length;
    index = (index + to + total) % total;
    offers.style.transform = `translateX(-${index * 100}%)`;
}
next.onclick = () => slide(1);
prev.onclick = () => slide(-1);
// Auto-slide every 5 seconds
setInterval(() => slide(1), 5000);
// end offers secion

