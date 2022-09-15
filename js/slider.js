$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 10000,
});

const prev = document.querySelector('.slick-prev')

const next = document.querySelector('.slick-next')

window.addEventListener('load', () => {
    prev.innerHTML = "<span class='material-symbols-outlined'> arrow_back_ios_new </span>"
    next.innerHTML = "<span class='material-symbols-outlined'> arrow_forward_ios </span>"
})