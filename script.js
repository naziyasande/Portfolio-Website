const sideMenu =document.querySelector('#sidemenu');

function openMenu(){
    sideMenu.style.transform ='translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform ='translateX(16rem)';
}