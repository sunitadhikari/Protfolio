
// const activePage = window.location.pathname;
// const navLinks= document.querySelectorAll('nav a').forEach(links =>{
//    if(links.href.includes(`${activePage}`)){
//         link.classList.add('active');
    
// }  
// })



// $('a[href*="#"]')
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//      if (target.length) {
//          event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//          var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { 
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); 
//             $target.focus();
//           };
//         });
//       }
//     }
//   });

// function scrollToSection(event) {
//     event.preventDefault();
//     const section = document.querySelector(event.target.getAttribute('href'));
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
  
//   const links = document.querySelectorAll('a');
//   links.forEach(link => {
//     link.addEventListener('click', scrollToSection);
//   });


function scrollToSection(event) {
    event.preventDefault();
    const sectionId = event.target.getAttribute('href').slice(1);
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
  
  