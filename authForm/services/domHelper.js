export const createNavLink = (text, action) => {
    const result = document.createElement('span');
    result.textContent = text;
    result.onclick = action;

    return result;
}

export const createFormElement = (onSubmit) => {
    const form = document.createElement('form');
    form.classList.add('auth-form');
    form.onsubmit = onSubmit;

    return form;
}

export const appendHeading = (text, parent) => {
    const result = document.createElement('h2');
    result.textContent = text;
    result.classList.add('user-data');

    parent.appendChild(result);
}

export const appendInputElement = (type, name, parent) => {
    const result = document.createElement('input');
    result.type = type;
    result.classList.add('input-data');
    result.name = `${name}-data`;
    result.placeholder = `Enter your ${name}...`;

    const br = document.createElement('br');

    parent.appendChild(result);
    parent.appendChild(br);
}

export const appendErrorElement = (text, parent) => {
    const result = document.createElement('div');
    result.classList.add('error');
    result.textContent = text;

    parent.appendChild(result);
}

export const appendSubmitButton = (text, parent) => {
    const result = document.createElement('button');
    result.type = 'submit';
    result.classList.add('submit-btn');
    result.textContent = text;

    parent.appendChild(result);
}