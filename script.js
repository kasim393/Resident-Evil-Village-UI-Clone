//tabbed
function openTab(evt, tabname) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}
function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
}
function playError() {
  var sound = document.getElementById("audio2");
  sound.play();
}

// preloader
$(window).on("load", function () {
  $("#status1").fadeIn().delay(5000).fadeOut();
  $("#status2").delay(5500).fadeIn().delay(1800).fadeOut();
  $("#img_logo").delay(8000).slideDown(2000); //8000
  $("#menu").delay(8400).fadeIn(2000); //11400

  $("#preloader").delay(8200).fadeOut("slow");
  $("body").delay(8200).css({ overflow: "visible" });
});

// continue
// Get the modal
var modal = document.getElementById("modal");
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var close = document.getElementById("close");
var close1 = document.getElementById("close1");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "flex";
};
$(document).ready(function () {
  $(".btn").on("click", function () {
    modal2.style.display = "flex";
  });
});
// When the user clicks on <span> (x), close the modal
close.onclick = function () {
  modal.style.display = "none";
  var sound = document.getElementById("audio");
  sound.play();
};
close1.onclick = function () {
  modal2.style.display = "none";
  var sound = document.getElementById("audio");
  sound.play();
};

// bonuses
$(function () {
  $("#home1").on({
    mouseenter: function () {
      $("#img").attr("src", "img/book.jpg");
    },
    mouseleave: function () {
      $("#img").attr("src", "img/book.jpg");
    },
  });
  $("#home2").on({
    mouseenter: function () {
      $("#img").attr("src", "img/extra.png");
    },
    mouseleave: function () {
      $("#img").attr("src", "img/extra.png");
    },
  });
  $("#home3").on({
    mouseenter: function () {
      $("#img").attr("src", "img/mv.jpg");
    },
    mouseleave: function () {
      $("#img").attr("src", "img/mv.jpg");
    },
  });
});

// hover sound effect
$("#nav-two li,#save")
  .each(function (i) {
    if (i != 0) {
      $("#beep-two")
        .clone()
        .attr("id", "beep-two" + i)
        .appendTo($(this).parent());
    }
    $(this).data("beeper", i);
  })
  .mouseenter(function () {
    $("#beep-two" + $(this).data("beeper"))[0].play();
  });

$("#beep-two").attr("id", "beep-two0");

// option
$(function () {
  $("#control").on({
    mouseenter: function () {
      $("#con-table").show();
      $("#cam-table").hide();
      $("#game-table").hide();
      $("#display-table").hide();
      $("#audio-table").hide();
      $("#lan-table").hide();
    },
    mouseleave: function () {
      $("#con-table").show();
    },
  });
  $("#camera").on({
    mouseenter: function () {
      $("#cam-table").show();
      $("#con-table").hide();
      $("#game-table").hide();
      $("#display-table").hide();
      $("#audio-table").hide();
      $("#lan-table").hide();
    },
    mouseleave: function () {
      $("#cam-table").show();
    },
  });
  $("#game-setting").on({
    mouseenter: function () {
      $("#game-table").show();
      $("#con-table").hide();
      $("#cam-table").hide();
      $("#display-table").hide();
      $("#audio-table").hide();
      $("#lan-table").hide();
    },
    mouseleave: function () {
      $("#game-table").show();
    },
  });
  $("#display").on({
    mouseenter: function () {
      $("#display-table").show();
      $("#con-table").hide();
      $("#cam-table").hide();
      $("#game-table").hide();
      $("#audio-table").hide();
      $("#lan-table").hide();
    },
    mouseleave: function () {
      $("#display-table").show();
    },
  });
  $("#audio1").on({
    mouseenter: function () {
      $("#audio-table").show();
      $("#con-table").hide();
      $("#cam-table").hide();
      $("#game-table").hide();
      $("#display-table").hide();
      $("#lan-table").hide();
    },
    mouseleave: function () {
      $("#audio-table").show();
    },
  });
  $("#language").on({
    mouseenter: function () {
      $("#lan-table").show();
      $("#con-table").hide();
      $("#cam-table").hide();
      $("#game-table").hide();
      $("#display-table").hide();
      $("#audio-table").hide();
    },
    mouseleave: function () {
      $("#lan-table").show();
    },
  });
});
