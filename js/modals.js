// Doctors Card
var modal = document.getElementById("first-doctor");
var modalSecond = document.getElementById("second-doctor");
var modalThird = document.getElementById("third-doctor");
var modalFour = document.getElementById("four-doctor");
var modalFive = document.getElementById("five-doctor");
var modalSix = document.getElementById("six-doctor");
var modalSeven = document.getElementById("seven-doctor");
var modalEight = document.getElementById("eight-doctor");
var modalNine = document.getElementById("nine-doctor");
var modalTen = document.getElementById("ten-doctor");
var modalEleven = document.getElementById("eleven-doctor");
var modalTwelve = document.getElementById("twelve-doctor");
var modalThirteen = document.getElementById("thirteen-doctor");
var modalFourteen = document.getElementById("fourteen-doctor");

var btnFirst = document.getElementById("doctorFirst");
var btnSecond = document.getElementById("doctorSecond");
var btnThird = document.getElementById("doctorThird");
var btnFour = document.getElementById("doctorFour");
var btnFive = document.getElementById("doctorFive");
var btnSix = document.getElementById("doctorSix");
var btnSeven = document.getElementById("doctorSeven");
var btnEight = document.getElementById("doctorEight");
var btnNine = document.getElementById("doctorNine");
var btnTen = document.getElementById("doctorTen");
var btnEleven = document.getElementById("doctorEleven");
var btnTwelve = document.getElementById("doctorTwelve");
var btnThirteen= document.getElementById("doctorThirteen");
var btnFourteen= document.getElementById("doctorFourteen");

var closeBtn = document.getElementById("first-doctor-close");
var closeBtnSecond = document.getElementById("second-doctor-close");
var closeBtnThird = document.getElementById("third-doctor-close");
var closeBtnFour = document.getElementById("four-doctor-close");
var closeBtnFive = document.getElementById("five-doctor-close");
var closeBtnSix = document.getElementById("six-doctor-close");
var closeBtnSeven = document.getElementById("seven-doctor-close");
var closeBtnEight = document.getElementById("eight-doctor-close");
var closeBtnNine = document.getElementById("nine-doctor-close");
var closeBtnTen = document.getElementById("ten-doctor-close");
var closeBtnEleven = document.getElementById("eleven-doctor-close");
var closeBtnTwelve = document.getElementById("twelve-doctor-close");
var closeBtnThirteen = document.getElementById("thirteen-doctor-close");
var closeBtnFourteen = document.getElementById("fourteen-doctor-close");

var bodyOverflow = document.getElementById("bodyBg");

// Modals Button
btnFirst.onclick = function() {
  modal.style.display = "block";
  bodyOverflow.style.overflowY = "hidden";
}

btnSecond.onclick = function() {
  modalSecond.style.display = "block";
  bodyOverflow.style.overflowY = "hidden";
}

btnThird.onclick = function() {
  modalThird.style.display = "block";
  bodyOverflow.style.overflowY = "hidden";
}

btnFour.onclick = function() {
  modalFour.style.display = "block";
  bodyOverflow.style.overflowY = "hidden";
}

btnFive.onclick = function() {
  modalFive.style.display = "block";
  bodyOverflow.style.overflowY = "hidden";
}

btnSix.onclick = function() {
  modalSix.style.display = "block";
  bodyOverflow.style.overflowY = "hidden";
}

btnSeven.onclick = function() {
  modalSeven.style.display = "block";
  bodyOverflow.style.overflowY = "hidden";
}

// btnEight.onclick = function() {
//   modalEight.style.display = "block";
//   bodyOverflow.style.overflowY = "hidden";
// }

btnNine.onclick = function() {
  modalNine.style.display = "block";
  bodyOverflow.style.overflowY = "hidden";
}

btnTen.onclick = function() {
  modalTen.style.display = "block";
  bodyOverflow.style.overflowY = "hidden";
}

// btnEleven.onclick = function() {
//   modalEleven.style.display = "block";
//   bodyOverflow.style.overflowY = "hidden";
// }

// btnTwelve.onclick = function() {
//   modalTwelve.style.display = "block";
//   bodyOverflow.style.overflowY = "hidden";
// }

// btnThirteen.onclick = function() {
//   modalThirteen.style.display = "block";
//   bodyOverflow.style.overflowY = "hidden";
// }

btnFourteen.onclick = function() {
  modalFourteen.style.display = "block";
  bodyOverflow.style.overflowY = "hidden";
}


// Close Buttons
closeBtn.onclick = function() {
  modal.style.display = "none";
}

closeBtnSecond.onclick = function() {
  modalSecond.style.display = "none";
  bodyOverflow.style.overflowY = "scroll";
}

closeBtnThird.onclick = function() {
  modalThird.style.display = "none";
  bodyOverflow.style.overflowY = "scroll";
}

closeBtnFour.onclick = function() {
  modalFour.style.display = "none";
  bodyOverflow.style.overflowY = "scroll";
}

closeBtnFive.onclick = function() {
  modalFive.style.display = "none";
  bodyOverflow.style.overflowY = "scroll";
}

// closeBtnSix.onclick = function() {
//   modalSix.style.display = "none";
//   bodyOverflow.style.overflowY = "scroll";
// }

closeBtnSeven.onclick = function() {
  modalSeven.style.display = "none";
  bodyOverflow.style.overflowY = "scroll";
}

// closeBtnEight.onclick = function() {
//   modalEight.style.display = "none";
//   bodyOverflow.style.overflowY = "scroll";
// }

closeBtnNine.onclick = function() {
  modalNine.style.display = "none";
  bodyOverflow.style.overflowY = "scroll";
}

closeBtnTen.onclick = function() {
  modalTen.style.display = "none";
  bodyOverflow.style.overflowY = "scroll";
}

// closeBtnEleven.onclick = function() {
//   modalEleven.style.display = "none";
//   bodyOverflow.style.overflowY = "scroll";
// }

// closeBtnTwelve.onclick = function() {
//   modalTwelve.style.display = "none";
//   bodyOverflow.style.overflowY = "scroll";
// }

// closeBtnThirteen.onclick = function() {
//   modalThirteen.style.display = "none";
//   bodyOverflow.style.overflowY = "scroll";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//     bodyOverflow.style.overflowY = "scroll";
//   }
// }

closeBtnFourteen.onclick = function() {
  modalFourteen.style.display = "none";
  bodyOverflow.style.overflowY = "scroll";
}



// Form
$(document).ready(function() { 

  $('[data-modal=booking]').on('click', function() {
      $('#callback').fadeIn();
  });
  $('.callback__wrap__close').on('click', function() {
      $('#callback').fadeOut();
  });
});