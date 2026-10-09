const driveTypes = {
    'fwd': 'Front-Wheel Drive',
    "rwd": 'Rear-Wheel Drive',
    "awd": 'All-Wheel Drive',
    "4wd": '4-Wheel Drive'
}


export default function extractCorrectOpions(value) {

    if(driveTypes[value]) {
        return driveTypes[value]
    }

    if (value === 'suv' || value === 'lpg') {
        return value.toUpperCase();

    }

    return value.charAt(0).toUpperCase() + value.slice(1);
}

