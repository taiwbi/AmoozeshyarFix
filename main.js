/**
 * This extension and all of its codes is developed by
 * Mohammad Mahdi Tayebi Niaraki (https://github.com/taiwbi/).
 *
 * If you wish to help this project you can develop
 * you code and send pull request on GitHub. Your name
 * will be published in README.md file on developers section.
 * You can make a copy of this repository, create and publish
 * your own extension but YOU CAN NOT REMOVE AUTHORS
 * NAME FROM manifest.js FILE OR ANY OTHER FILES.
 */

function TextCorrectionListener(event) {
  let text = event.target.value;
  if (
    typeof event != "undefined" &&
    event.target.value !== "" &&
    event.target.value.charAt(0) !== "%" &&
    ! /^[0-9]+$/.test(text.replace(/\D/g, ''))
  ) {
    let result = text.replace(/[یکئؤإأآةء‌ ]/g, "%");
    result = "%" + result + "%";
    event.target.value = result;
  }
  return event;
}

function addListeners() {
  setInterval(() => {
    let serchInput = document.querySelectorAll(
      `#__searchItems input[type="text"]`,
    );
    serchInput.forEach((element) => {
      element.addEventListener("mouseleave", (event) => {
        TextCorrectionListener(event);
      });
      element.addEventListener("focusout", (event) => {
        TextCorrectionListener(event);
      });
    });
  }, 1000);
}

addListeners();
