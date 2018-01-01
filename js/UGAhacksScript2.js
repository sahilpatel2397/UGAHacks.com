/*
 * A variable that calls the more() function when cllicked
 */
var expandButton = document.getElementById("expand");
expandButton.addEventListener("click", more);

/*
 * This function displays all the FAQs and alternates
 * between saying see more and see less
 */
function more() {
  if (expandButton.textContent == "SEE MORE") {
    expandButton.textContent = "SEE LESS";
    document.getElementById("more-FAQ").style.display = "inherit";
  }
  else {
    expandButton.textContent = "SEE MORE";
    document.getElementById("more-FAQ").style.display = "none";
  }
}

/*
 * These variables are elements that will be used to find
 * where to scroll to
 */
var schedule = document.getElementById("schedule-scroll");
var faq = document.getElementById("FAQ-header");
var partners = document.getElementById("partners");

/*
 * This function scrolls a section into view when it is clicked
 * in the header
 */
var headerId;
function reply_click(clicked_id) {
  headerId = clicked_id;

  if (headerId == 0) {
    window.scrollTo(0, 0);
  }
  else if (headerId == 1) {
    schedule.scrollIntoView();
  }
  else if (headerId == 2) {
    faq.scrollIntoView();
  }
  else if (headerId == 3) {
    partners.scrollIntoView();
  }
}

/*
 * These variables and if statement are used to determine
 * when the menu line needs to be scrolled over
 */
var spaceIncrease = 0;
var viewportwidth = window.innerWidth;
if (viewportwidth < 1000) {
  spaceIncrease = 600;
  console.log("in if statement")
}

/*
 * This function scrolls the red menu bar as the user scrolls the page
 */
window.onscroll = function() {changes()};
var y;
function changes() {
  y = window.scrollY;
  if (y > 50)
    document.getElementById("header").style.boxShadow = "0px 3px 5px lightgrey";
  else
  document.getElementById("header").style.boxShadow = "inherit";

  if (y<1300) {
    document.getElementById("header-line").style.left = "137px";
    document.getElementById("header-line").style.width = "75px";
  }

  if (y>1300 + spaceIncrease) {
    document.getElementById("header-line").style.left = "274px";
    document.getElementById("header-line").style.width = "115px";
  }

  if (y>2000 + spaceIncrease) {
    document.getElementById("header-line").style.left = "449px";
    document.getElementById("header-line").style.width = "44px";
  }

  if (expandButton.textContent == "SEE MORE") {
    if (y>2500 + spaceIncrease) {
      document.getElementById("header-line").style.left = "552px";
      document.getElementById("header-line").style.width = "118px";
    }
  }
  else {
    if (y>3800 + spaceIncrease) {
      document.getElementById("header-line").style.left = "552px";
      document.getElementById("header-line").style.width = "118px";
    }
  }
}

/*
 * This variable detects when the mobile menu is clicked
 */
var menuButton = document.getElementById("colapsed-menu-button");
menuButton.addEventListener("click", expandMenu);

/*
 * This function displays the mobile menu
 */
function expandMenu() {
  document.getElementById("colapsed-menu").style.display = "inherit";
}

/*
 * This variable detects when the mobile menu exitis clicked
 */
var exitMenu = document.getElementById("exit-menu");
exitMenu.addEventListener("click", exitMenuFunction);

/*
 * This function hides the mobile menu
 */
function exitMenuFunction() {
  document.getElementById("colapsed-menu").style.display = "none";
}
