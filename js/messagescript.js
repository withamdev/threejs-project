var messageArray = ["Hello, my name is Möbius."];
var textPosition = 0;
var speed = 80;

typewriter = () => {
  document.querySelector("#message").innerHTML =
    messageArray[0].substring(0, textPosition) + "<span>|</span>";
  if (textPosition++ < messageArray[0].length) {
    setTimeout(typewriter, speed);

    switch (messageArray[0].substring(textPosition--, textPosition++)) {
      case ",":
        speed = 1000;
        break;

      case " ":
        speed = 40;
        break;

      default:
        speed = 80;
        break;
    }
  } else {
    textPosition = 0;
    setTimeout(typewriter, speed);
  }
};

backspace = () => {
  //   textPosition--;
  //   document.querySelector("#message").innerHTML = "";
  //   document.querySelector("#message").innerHTML =
  //     messageArray[0].substring(0, textPosition) + "<span>|</span>";
  //   if (textPosition > 0) {
  //     textPosition--;
  //     setTimeout(backspace, speed);
  //   }
  //     else {
  //       typewriter;
  //     }
};

window.addEventListener("load", typewriter);
