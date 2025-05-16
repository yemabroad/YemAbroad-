window.addEventListener('scroll', revealText);

function revealText() {
    const headings = document.querySelectorAll('.heading');
    const areas = document.querySelectorAll('.area');
    const screenPosition = window.innerHeight;

    headings.forEach(heading => {
        const position = heading.getBoundingClientRect().top;
        if (position < screenPosition) {
            heading.style.opacity = 1;
        }
    });

    areas.forEach(area => {
        const position = area.getBoundingClientRect().top;
        if (position < screenPosition) {
            area.style.opacity = 1;
        }
    });
}
  document.addEventListener("DOMContentLoaded", function () {
    const phonebar = document.getElementById('phonebar');
    const navbar = document.getElementById('navbar');
    const items = document.getElementsByClassName('items');

    phonebar.addEventListener('click', () => {
      navbar.classList.toggle('active');

      for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle('active');
      }
    });
  });


