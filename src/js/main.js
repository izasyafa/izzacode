
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

let sections = document.querySelectorAll('section');
let navLinksLarge = document.querySelectorAll('.navbar-large ul li a');


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 50;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if(top >= offset && top < offset + height){
      navLinksLarge.forEach(links => {
        links.classList.remove('active-large');
        document.querySelector('.navbar-large ul li a[href*='+ id +']').classList.add('active-large');
      });
    }
  })
}

function scrollActive(){
  const scrollY = window.pageYOffset;

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      let sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.navbar-mobile ul li a[href*=' + sectionId + ']').classList.add('active-mobile')
          document.querySelector('.navbar-mobile ul li a[href*=' + sectionId + ']').classList.remove('opacity-50')
      }else{
          document.querySelector('.navbar-mobile ul li a[href*=' + sectionId + ']').classList.remove('active-mobile')
          document.querySelector('.navbar-mobile ul li a[href*=' + sectionId + ']').classList.add('opacity-50')
      }
  })
}
window.addEventListener('scroll', scrollActive)



window.addEventListener('load', () => {
  let portfolioContainer = select('.portfolio-container');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    let portfolioFilters = select('#portfolio-filters-desk button', true);

    on('click', '#portfolio-filters-desk button', function(e) {
      e.preventDefault();
      portfolioFilters.forEach(function(el) {
        el.classList.remove('active-filter-port-desk');
      });
      this.classList.add('active-filter-port-desk');

      portfolioIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });
    }, true);
  }
});

window.addEventListener('load', () => {
  let portfolioContainer = select('.portfolio-container');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    let portfolioFilters = select('#portfolio-filters button', true);

    on('click', '#portfolio-filters button', function(e) {
      e.preventDefault();
      portfolioFilters.forEach(function(el) {
        el.classList.remove('active-filter-port');
      });
      this.classList.add('active-filter-port');

      portfolioIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });
    }, true);
  }
});