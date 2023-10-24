export const validateEmail = (email) => {
    return email.match('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
}

export const validatePassword = (password) => {
    return password.match('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$');
}

export const validateName = (name) => {
    return name.match('/^[a-z ,.\'-]+$/i');
}   