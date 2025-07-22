/*
Student Name: Gabriel Zayas
File Name: script.js
Date: 04/17/2025
*/

//Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("fl-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}

//Accordion funciton
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    content.classList.toggle('active');

  });
});

//Function to display a promo code
function discount() {
	var promo = document.getElementById("special");
	promo.firstChild.nodeValue = "Promo Code: EB50Forte";
	promo.style.color = "#cc0000";
	promo.style.fontsize = "2em";
}
