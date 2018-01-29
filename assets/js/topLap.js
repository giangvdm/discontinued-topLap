/* Add a CSS class to all fa-icons on navigation bar to make them visible when view on mobile devices
(and responsive mode) */
var faIcons = document.querySelectorAll("li a i.fa"); // select
// manipulate
// loop through the list of all fa-icons on navbar, then give them the class "navbar__icon--mobile"
for (var i = 0; i < faIcon.length; i++) {
    faIcons[i].classList.add("navbar__icon--mobile");
}
//

