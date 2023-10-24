import * as emailService from "./emailSender.js"
import * as userService from "./userService.js"
import * as domManager from "./domManager.js"
import * as localStorageManager from "./localStorageManager.js"
import UserContext from "../contexts/UserContext.js"
import { validateEmail, validateName, validatePassword } from "./validator.js"

export const onLoginSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get('email-data');
    const password = formData.get('password-data');

    if(!validateEmail(email) || !validatePassword(password)) {
        domManager.appendLoginView('Invalid email or password.');
        return;
    }

    var result = userService.login(email, password);

    if (result.success) {
        localStorageManager.saveUser(result.user);
        UserContext.user = result.user;
        domManager.appendNavigation(UserContext.user);
        domManager.appendUserDetailsView(UserContext.user);
    } else {
        domManager.appendNavigation(UserContext.user);
        domManager.appendLoginView('Invalid email or password.');
    }
}

export const onRegisterSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const firstName = formData.get('firstName-data');
    const lastName = formData.get('lastName-data');
    const email = formData.get('email-data');
    const password = formData.get('password-data');
    const repeatPassword = formData.get('repeatPassword-data');

    if (password !== repeatPassword)
        domManager.appendRegisterView('Password and RepeatPassword don\'t match.');

    if(!validateName(firstName)) {
        domManager.appendRegisterView('Invalid name format.');
        return;
    }
    if(!validateName(lastName)) {
        domManager.appendRegisterView('Invalid name format.');
        return;
    }
    if(!validateEmail(email)) {
        domManager.appendRegisterView('Invalid email format.');
        return;
    }
    if(!validatePassword(password)) {
        domManager.appendRegisterView('Password must contain eight characters, at least one letter, one number and one special character.');
        return;
    }

    const result = userService.register(
        firstName,
        lastName,
        email,
        password
    );

    if (result.success)
        domManager.appendRegistrationSuccessView();
}

export const onLogoutSubmit = () => {
    localStorageManager.removeUser();
    UserContext.user = {};
}