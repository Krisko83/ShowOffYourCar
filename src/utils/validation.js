const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const imageUrlRegex = /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i;

function register(values) {
    const errors = {};


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

function addEdit(values) {
    const errors = {}
     
    const categoryOptions = ['sedan','hatchback', 'wagon','coupe','convertible','suv','van', 'pickup'];
    const gearOptions = ['manual', 'automatic'];
    const fuelOptions = ['petrol', 'diesel', 'hybrid', 'electric', 'lpg'];
    const driverTypeOptions = ['fwd', 'rwd', 'awd', '4wd']
 
    if (!values.imageUrl) {
        errors['imageUrl'] = 'ImageUrl is required!'
    }

    if (values.imageUrl && !imageUrlRegex.test(values.imageUrl)) {
        errors['imageUrl'] = 'Please enter a valid imageUrl!'
    }

    if (!values.manufacturer) {
        errors['manufacturer'] = 'Manufacturer is required!'
    }

    if (values.manufacturer && values.manufacturer.length < 2) {
        errors['manufacturer'] = 'Manufacturer must be at least 2 characters long!'
    }

    if (!values.model) {
        errors['model'] = 'Model is required!'
    }

    if (values.model && values.model.length < 2) {
        errors['model'] = 'Model must be at least 2 characters long!'
    }

    if (!values.year) {
        errors['year'] = 'Year is required!'
    }

    if (values.year && (values.year.length !== 4) && (Number(values.year) > new Date().getFullYear()) || Number(values.year) < 1900) {
        errors['year'] = 'Please enter a valid year!'
    }

    if (!values.power) {
        errors['power'] = 'Power is required!'
    }

    if (values.power && Number(values.power) <= 0) {
        errors['power'] = 'Power must be more then 0!'
    }

    if (!values.mileage) {
        errors['mileage'] = 'Mileage is required!'
    }

    if (values.mileage && Number(values.mileage) <= 0) {
        errors['mileage'] = 'Mileage must be more then 0!'
    }

    
    if (!values.cubic) {
        errors['cubic'] = 'Engine is required!'
    }

    if (values.cubic && Number(values.cubic) <= 0) {
        errors['cubic'] = 'Engine must be more then 0!'
    }

       
    if (!values.description) {
        errors['description'] = 'Description is required!'
    }

    if (values.description && values.description.length < 10) {
        errors['description'] = 'Description must be at least 10 characters long!'
    }

    if(!categoryOptions.includes(values.category)) {
        errors['category'] = 'Category must be one of these options Sedan, Hatchback, Wagon, Coupe, Convertible, SUV, Van or Pickup!'
    }

    if(!gearOptions.includes(values.gearbox)) {
        errors['gearbox'] = 'Gearbox must be one of Manual or Automatic!';
    }

    
    if(!fuelOptions.includes(values.fuel)) {
        errors['fuel'] = 'Fuel must be one of these options Petrol, Diesel, Hybrid, Electric or LPG!';
    }

    if(!driverTypeOptions.includes(values.driveType)) {
        errors['driveType'] = 'Drive Type must be one of these options Front-Wheel Drive, Rear-Wheel Drive, All-Wheel Drive or 4-Wheel Drive';
    }

    return errors
}
 
export const validation = {
    register,
    login,
    addEdit
}