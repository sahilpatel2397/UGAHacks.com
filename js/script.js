var expandButton = document.getElementById("expand");
expandButton.addEventListener("click", more);

function more() {
	if (expandButton.textContent == "SEE MORE") {
		expandButton.textContent = "SEE LESS";
		document.getElementById("more-faq").style.display = "inherit";
	}
	else {
		expandButton.textContent = "SEE MORE";
		document.getElementById("more-faq").style.display = "none";
	}
}

$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#navbar").addClass("active");
    }
    else {
        $("#navbar").removeClass("active");
    }
});
