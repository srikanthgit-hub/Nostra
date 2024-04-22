// Offer bar close
var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)

//  Selecting Side Navbar, MenuIcon
var sideNavbar = document.querySelector(".side-navbar")
var menuIcon = document.getElementById("menuicon")
var closeNav = document.getElementById("closenav")

menuIcon.addEventListener("click",function(){
    sideNavbar.style.marginLeft="0"
})

closeNav.addEventListener("click",function(){
    sideNavbar.style.marginLeft = "-50%"
})

