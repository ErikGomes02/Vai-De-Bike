$(document).ready(function () {
  $('#mobile_btn').on('click', function () {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x');
  });

  const perguntas = document.querySelectorAll('.duvida-pergunta');
  perguntas.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('ativa');
    });
  });

  const sections = $('section');
  const navItems = $('.nav-item');

  $(window).on('scroll', function () {
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    if (scrollPosition <= 0) {
      header.css('box-shadow', 'none');
    } else {
      header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
    }

    let activeSectionIndex = 0;

    sections.each(function (i) {
      const section = $(this);
      const sectionTop = section.offset().top - 100;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    });

    navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');
  });

  $('#mobile_nav_list a').on('click', function () {
    $('#mobile_menu').removeClass('active');
    $('#mobile_btn').find('i').removeClass('fa-x');
  });

  ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%',
  });

  ScrollReveal().reveal('#prices', {
    origin: 'right',
    duration: 2000,
    distance: '20%',
  });

  ScrollReveal().reveal('.duvidas-section', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%',
  });
});
