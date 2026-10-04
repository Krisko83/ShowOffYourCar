function register(values) {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.fullName) {
        errors['fullName'] = 'Full Name is required!';
    }

    if (values.fullName && values.fullName.length < 5) {
        errors['fullName'] = 'Full Name must be at least 5 characters long!';
    }

    if (!values.username) {
        errors['username'] = 'Username is required!';
    }

    if (values.username && values.username.length < 3) {
        errors['username'] = 'Username must be at least 3 characters long!';
    }

    if (!values.email) {
        errors['email'] = 'Email is required!';
    }

    if (!emailRegex.test(values.email)) {
        errors['email'] = 'Please enter a valid email address!';
    }

    if (!values.age) {
        errors['age'] = 'Age is required!';
    }

    if (values.age < 18) {
        errors['age'] = 'User must be 18 years old or older!';
    }

    if (!values.country) {
        errors['country'] = 'Country is required!';
    }

    if (values.country && values.country.length < 2) {
        errors['country'] = 'Country must be at least 2 characters long!';
    }

    if (!values.city) {
        errors['city'] = 'City is required!';
    }

    if (values.city && values.city.length < 3) {
        errors['city'] = 'City must be at least 3 characters long!';
    }

    if (!values.password) {
        errors['password'] = 'Password is required!'
    }

    if (values.password && values.password.length < 8) {
        errors['password'] = 'Password must be at least 8 characters long!';
    }


    if (!values.repeatPassword) {
        errors['repeatPassword'] = 'Repeat Password is required!'
    }

    if (values.repeatPassword && values.repeatPassword.length < 8) {
        errors['repeatPassword'] = 'Repeat Password must be at least 8 characters long!';
    }

    if (values.password !== values.repeatPassword) {
        errors['repeatPassword'] = 'The passwords do not match!';
    }


    return errors;
}


function login(values) {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.email) {
        errors['email'] = 'Email is required!';
    }

    if (!emailRegex.test(values.email)) {
        errors['email'] = 'Please enter a valid email address!';
    }

    if (!values.password) {
        errors['password'] = 'Password is required!'
    }

    if (values.password && values.password.length < 8) {
        errors['password'] = 'Password must be at least 8 characters long!';
    }

    return errors;
}

export const validation = {
    register,
    login
}