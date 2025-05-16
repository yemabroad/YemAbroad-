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