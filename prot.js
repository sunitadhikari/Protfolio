
const activePage = window.location.pathname;
const navLinks= document.querySelectorAll('nav a').forEach(links =>{
   if(links.href.includes(`${activePage}`)){
        link.classList.add('active');
    
}  
})
