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

function AddTextCorrectionEventListener(event) {
    if (typeof event != "undefined" && event.target.value !== '' && event.target.value.charAt(0) !== '%') {
        let text = event.target.value;
        let result = text.replaceAll("ی", "%");
        result = result.replaceAll(" ", "%");
        result = result.replaceAll("ک", "%");
        result = result.replaceAll("ئ", "%");
        result = result.replaceAll("ؤ", "%");
        result = result.replaceAll("إ", "%");
        result = result.replaceAll("أ", "%");
        result = result.replaceAll("آ", "%");
        result = result.replaceAll("ة", "%");
        result = result.replaceAll("ء", "%");
        result = result.replaceAll("‌", "%");
        result = "%" + result + "%";
        event.target.value = result;
    }
    return event;
}

document.addEventListener('click', (event) => {
    document.querySelector('#__searchItems input').addEventListener('focusout', AddTextCorrectionEventListener(event));
});
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#__searchItems input').addEventListener('focusout', AddTextCorrectionEventListener(event));
});
