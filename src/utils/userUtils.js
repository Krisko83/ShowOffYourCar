export default function getUserData(userData) {
    return {
        id: userData?.id,
        fullName: userData.fullName,
        email: userData.email,
        username: userData.username,
        age: userData.age,
        country: userData.country,
        city: userData.city,
        gender: userData.gender
    }
};
 