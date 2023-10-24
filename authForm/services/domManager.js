import UserContext from '../contexts/UserContext.js';
import * as domHelper from './domHelper.js'
import { onLoginSubmit, onRegisterSubmit, onLogoutSubmit } from "./eventHandlers.js";

const main = document.getElementById('main');
const nav = document.getElementById('navigation');

export const appendNavigation = (user) => {
    clearRoot(nav);

    if (user.id) {
        const profile = domHelper.createNavLink('Profile', () => appendUserDetailsView(user));
        const logout = domHelper.createNavLink('Log out', () => appendLogoutView());

        nav.appendChild(profile);
        nav.appendChild(logout);
    } else {
        const login = domHelper.createNavLink('Log in', () => appendLoginView());
        const register = domHelper.createNavLink('Register', () => appendRegisterView());

        nav.appendChild(login);
        nav.appendChild(register);
    }

}

export const appendLoginView = (error) => {
    clearRoot(main);

    const form = domHelper.createFormElement(onLoginSubmit);

    if(error)
        domHelper.appendErrorElement(error, form);

    domHelper.appendInputElement('email', 'email', form);
    domHelper.appendInputElement('password', 'password', form);
    domHelper.appendSubmitButton('Log in', form);

    main.appendChild(form);
}

export const appendRegisterView = (error) => {
    clearRoot(main);

    const form = domHelper.createFormElement(onRegisterSubmit);

    if(error)
        domHelper.appendErrorElement(error, form);

    domHelper.appendInputElement('text', 'firstName', form);
    domHelper.appendInputElement('text', 'lastName', form);
    domHelper.appendInputElement('email', 'email', form);
    domHelper.appendInputElement('password', 'password', form);
    domHelper.appendInputElement('password', 'repeatPassword', form);
    domHelper.appendSubmitButton('Register', form);

    main.appendChild(form);
}

export const appendLogoutView = () => {
    onLogoutSubmit();

    appendNavigation(UserContext.user);
    appendLoginView();
}

export const appendUserDetailsView = (user) => {
    clearRoot(main);

    const parent = document.createElement('div');

    domHelper.appendHeading('First Name: ' + user.firstName, parent);
    domHelper.appendHeading('Last Name: ' + user.lastName, parent);
    domHelper.appendHeading('Email: ' + user.email, parent);

    main.appendChild(parent);
}

export const appendUserUpdateView = () => {

}

export const clearRoot = (root) => {
    const children = root.children;

    while(children.length > 0)
        root.removeChild(children[children.length-1]);
}

export const appendRegistrationSuccessView = () => {
    clearRoot(main);

    const result = document.createElement('div');
    result.classList.add('success-view');
    result.textContent = 'Success';

    main.appendChild(result);
}