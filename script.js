$(document).ready(function () {
    var root = $(":root");

    $(".switch").change(function () {

      var checked = $("input").prop("checked");
      //light theme
      if (checked === true) {
        root.css("--bg-color", "white");
        root.css('--top-bg', "hsl(225, 100%, 98%)");
        root.css("--head-color", "hsl(230, 17%, 14%)");
        root.css("--text-color", "hsl(228, 12%, 44%)");
        root.css("--card-bg", "hsl(227, 47%, 96%)");
        darkMode = false;
      } else {
        // dark theme
        root.css("--bg-color", "hsl(230, 17%, 14%)");
        root.css("--top-bg", "hsl(232, 19%, 15%)");
        root.css("--head-color", "white");
        root.css("--text-color", "hsl(228, 34%, 66%)");
        root.css("--card-bg", "hsl(228, 28%, 20%)");
        darkMode = true;
      }

    });
  });