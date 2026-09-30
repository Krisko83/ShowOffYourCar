export function showHidePassHandler(e) {
    const passInputElement = e.target.parentElement.previousElementSibling;

    passInputElement.type = 'text';

    setTimeout(() => {
        passInputElement.type = 'password';
    }, 1500)
}

export const utils = {
    showHidePassHandler
}