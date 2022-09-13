/*
   Theme Name : Start Bootstrap
   Theme Description : learnning html, css
   Author : グエン・フイ・ホアン
   Version : 1.0.0

 ============================= Table Of Content  =============================
 1, global value
 2, Menu
 3, Section Active
 4, Modal
*/

/* ============================= 1, global value  ============================= */
// click menu
var listMenu = document.querySelector('.header .header__menu .header__menu-list');
var contentDocument = document.querySelector('html');
var itemMenu = document.querySelectorAll('.header .header__menu .header__menu-list .list__item');

// show modal
var listMoada = document.querySelector('.modal');
var listPortfoio = document.querySelectorAll('.portfoio .portfoio__box');

/* ============================= 2, Menu  ============================= */
var menu = {
    init: function() {
        this.showMenu();
        this.moveSection();
    },
    // ipad. iphone: show menu
    showMenu: function() {
        let barMenu = document.querySelector('.header .header__menu .header__menu-bar');
        barMenu.addEventListener('click', function() {
            listMenu.classList.toggle('show');
        });
    },
    moveSection: function() {
        // scroll
        let items = document.querySelectorAll('#menu .header__menu .list__item');

        items.forEach(element => {
            element.addEventListener('click', function(event) {
                // close menu in response screen
                listMenu.classList.remove('show');
                // move to section
                event.preventDefault();
                let textId = element.querySelector(".list__item-link")
                    .getAttribute("data-direct")
                var elmnt = document.getElementById(textId);
                var sectionOffset = elmnt.offsetTop;
                window.scrollTo({
                    top: sectionOffset - 70,
                    behavior: 'smooth'
                });
            })
        });
    }
}

/* ============================= 3, Section Active  ============================= */
var section = {
    init: function() {
        this.activeSection();
    },
    activeSection: function() {
        // scroll screen
        let listshow = document.querySelector('.header .header__menu');
        let goToTop = document.querySelector('.back-top-top');
        window.addEventListener('scroll', function(e) {
            let last_known_scroll_position = window.scrollY;
            let items = document.querySelectorAll('.section__item');
            let yMenu = document.getElementById('menu').getBoundingClientRect().height;
            itemMenu.forEach(elemt => {
                elemt.classList.remove('selected');
            });
            for (var i = 0; i < items.length; i++) {
                if (itemMenu.length > i &&
                    items[i].getBoundingClientRect().top < yMenu &&
                    items[i + 1].getBoundingClientRect().top > yMenu) {
                    itemMenu[i].classList.add('selected');
                    break;
                }
            }
            // set height menu
            if (last_known_scroll_position > 0) {
                listshow.classList.add('padding-0');
                goToTop.classList.add('display-opacity');

            } else {
                listshow.classList.remove('padding-0');
                goToTop.classList.remove('display-opacity');
            }
        });
    }
}

/* ============================= 4, Modal  ============================= */
var modal = {
    init: function() {
        this.openModal();
        this.closeModal();
    },
    openModal: function() {
        listPortfoio.forEach(element => {
            element.addEventListener('click', function() {
                listMoada.classList.add('modal-show');
                contentDocument.classList.add('overflow-hiden');
                let imgModal = document.getElementById("modal-img");
                let titleModal = document.getElementById('modal-title');
                imgModal.innerHTML = '';
                //addtitle
                let textTitle = element.querySelector('img').getAttribute("data-title");
                titleModal.textContent = textTitle;
                // add image
                var img = document.createElement("img");
                img.src = element.querySelector('img').src
                imgModal.appendChild(img);
            });
        });
    },
    closeModal: function() {
        // close modal
        let closeModal = document.querySelectorAll('.modal .modal-close');
        let text = document.querySelector('.modal')
        closeModal.forEach(element => {
            element.addEventListener('click', function() {
                listMoada.classList.remove('modal-show');
                contentDocument.classList.remove('overflow-hiden');
            });
        });
        // outline click
        document.getElementById('modal').onclick = function(e) {
            if (!document.getElementById('modal-content').contains(e.target)) {
                listMoada.classList.remove('modal-show');
                contentDocument.classList.remove('overflow-hiden');
            }
        }
    }
}

menu.init();
section.init();
modal.init();