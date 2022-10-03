var icon =  document.getElementById(".search-icon");
var search = document.getElementById("menu-item-search");

var navbarElement = document.getElementById("menu__item__hide");

var searchInput = document.getElementById("menu__search__input");
var cancleInput = document.querySelector(".clear__icon");

var menuBurger = document.getElementById("navbar-burger-logo");
var menuLogo = document.getElementById("navbar-main-logo");

var menuShopping = document.getElementById("menu-shopping");
var menuUser = document.getElementById("menu-user");


const mediaQuery = window.matchMedia('(max-width: 600px)')


function SearchInputActive() {
    if (mediaQuery.matches)
    {   
        menuBurger.style.display = 'none';
        menuLogo.style.display = 'none';
        menuShopping.style.display = 'none';
        menuUser.style.display = 'none';
        search.style.width = "100%";
    }

    if (searchInput.classList.contains('active'))
    {
        SearchInputDisable();
    }
    else {
        navbarElement.style.display = 'none';
        searchInput.classList.toggle('active');
        cancleInput.style.display = 'flex';
    }


}

function SearchInputDisable() {
    if (mediaQuery.matches)
    {   
        menuBurger.style.display = 'flex';
        menuLogo.style.display = 'flex';
        menuShopping.style.display = 'flex';
        menuUser.style.display = 'flex';
        search.style.width = "";
    }
    searchInput.classList.remove('active');
    cancleInput.style.display = 'none';
    navbarElement.style.display = 'flex';
}
