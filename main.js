$(document).ready(function () {
  // Set Dark Theme as default
  $(window).on("load", function () {
    $("#switcher").prop("checked", true);
    $("body").attr("data-theme", "dark");
  });

  // Switch Themes
  const caption = $(".theme-switcher h4");
  const input = $(".theme-switcher input");

  input.change(function (e) {
    if (e.target.checked) {
      $("body").attr("data-theme", "dark");
      caption.text("Dark Mode");
    } else {
      $("body").attr("data-theme", "light");
      caption.text("Light Mode");
    }
  });

  ////////////////////////////////////
  // Toggle Heading Line
  const referenceEl = $(".theme-switcher");

  // When Loading
  $(window).on("load resize", function () {
    const windowWidth = $(window).width();
    const headingLine = $(".heading-line");

    if (windowWidth <= 576 && headingLine.length === 0) {
      referenceEl.before(`<div class="heading-line"></div>`);
    }

    if (windowWidth > 576 && headingLine.length !== 0) {
      headingLine.remove();
    }
  });
});

////////////////////////////////////
// Theme Switcher Hovering State
const checkbox = $("input#switcher");
const modeCaption = $("h4.mode-caption");
const switchBtn = $("label.switch-btn");
$(".switch-btn").hover(
  function () {
    if (checkbox.is(":checked")) {
      modeCaption.css("color", "white");
    } else {
      switchBtn.css(
        "background",
        "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
      );
    }
  },
  function () {
    if ($("input#switcher").is(":checked")) {
      modeCaption.css("color", "hsl(228, 34%, 66%)");
    } else {
      switchBtn.css("background", "hsl(230, 22%, 74%)");
    }
  }
);

// Reset Mode Caption After Theme Change
checkbox.click(function () {
  if (!$("input#switcher").is(":checked")) {
    modeCaption.css("color", "hsl(228, 12%, 44%)");
  } else {
    modeCaption.css("color", "hsl(228, 34%, 66%)");
  }
});

//////////////////////////////////////////////
// Card Body Hovering State
const cardBody = $(".card-body");
cardBody.hover(
  function (e) {
    if (checkbox.is(":checked")) {
      const target = e.target.closest(".card-body");
      target.style.backgroundColor = "hsl(228, 28%, 28%)";
    } else {
      const target = e.target.closest(".card-body");
      target.style.backgroundColor = "hsl(227, 47%, 90%)";
    }
  },
  function (e) {
    if (checkbox.is(":checked")) {
      const target = e.target.closest(".card-body");
      target.style.backgroundColor = "hsl(228, 28%, 20%)";
    } else {
      const target = e.target.closest(".card-body");
      target.style.backgroundColor = "hsl(227, 47%, 96%)";
    }
  }
);

// Reset Card Color After Theme Change
checkbox.click(function () {
  if (checkbox.is(":checked")) {
    cardBody.css("background-color", "hsl(228, 28%, 20%)");
  } else {
    cardBody.css("background-color", "hsl(227, 47%, 96%)");
  }
});
