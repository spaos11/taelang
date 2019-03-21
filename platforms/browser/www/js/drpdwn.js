$(".dropdown-button").on("click", function() {
	$(this).closest($(".dropdown")).toggleClass("open");
});

$(".dropdown-menu-button").on("click", function() {
	$(this).closest($(".dropdown")).toggleClass("open");
});