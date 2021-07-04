const hamburger = document.querySelector('#main #home-section .container .nav-bar');
const navlist = document.querySelector('#main #home-section .container .nav-list');
const mobile_menu = document.querySelector('#main #home-section .container .nav-list ul');
const menu_item = document.querySelectorAll('#main #home-section .container .nav-list ul li a');
const navshow = document.querySelector(' .up-arrow ');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navlist.classList.toggle('active');
});


document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 500) {
		navshow.style.position = 'fixed';
        navshow.style.right = '220px';
	} else {
		navshow.style.position = 'fixed';
		navshow.style.right = '-220px';
    
	}
});

let imgBx = document.querySelectorAll('.imgBx');
imgBx.forEach(popup => popup.addEventListener('click', () =>
{
	popup.classList.toggle('active')
}))
