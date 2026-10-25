export default function getUserData(userData) {
    const { inputPassword, newPassword, repeatNewPassword , ...data } = userData

    const returnValue = {
        inputPassword,
        newPassword,
        data
    } 
    
    return returnValue
};

 