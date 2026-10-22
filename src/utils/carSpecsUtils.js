const driveTypes = {
    'FWD': 'Front-Wheel Drive',
    "RWD": 'Rear-Wheel Drive',
    "AWD": 'All-Wheel Drive',
    "4WD": '4-Wheel Drive'
}


export default function extractCorrectOpions(value) {

    if (driveTypes[value]) {
        return driveTypes[value]
    }

    if (value === 'suv' || value === 'lpg') {
        return value.toUpperCase();

    }

    return value.charAt(0).toUpperCase() + value.slice(1);
}

