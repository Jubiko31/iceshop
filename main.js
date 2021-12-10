// alert("Note that product on this this site aren't real")
const projectName = "Eccomerce Website - Winter Edition"

//-----------------------NAVBAR------------
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav_link'),
    navMenu = document.getElementById('nav-menu')

function linkToggle () {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkToggle))

const sections = document.querySelectorAll('section[id')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*='+sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav_menu a[href*='+sectionId + ']').classList.remove('active')
        }
    })
}

window.onscroll = () => {
    const nav = document.getElementById('header')
    if (this.scrollY >= 200) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header')
    }
}