export function showHidePassHandler(e) {
    const passInput = e.target.parentElement.previousElementSibling;

    passInput.type = 'text';

    setTimeout(() => {
        passInput.type = 'password';
    }, 1500)
}

export const utils = {
    showHidePassHandler
}