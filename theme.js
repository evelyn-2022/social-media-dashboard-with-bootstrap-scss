// Set Dark Theme as default
$(window).on("load", function () {
  $("#switcher").prop("checked", true);
  $("body").attr("data-theme", "dark");
});
