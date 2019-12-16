//demo 
const lon1Deg = 1.6551; 
const lon2Deg = 1.5757; 
const lat1Deg = 50.7531;
const lat2Deg = 50.8189;
console.log(getDistance(lon1Deg, lat1Deg, lon2Deg, lat2Deg));

function getDistance(lon1Deg, lat1Deg, lon2Deg, lat2Deg) {
    //define location in degrees
    const radius = 6371e3; // radius of earth in meters
    //define locations in radians
    const lat1Rad = degToRad(lat1Deg);
    const lat2Rad = degToRad(lon1Deg);
    const latDiffRad = degToRad(lat1Deg - lat2Deg);
    const lonDiffRad = degToRad(lon2Deg - lon1Deg);
    //haversine formula
    const haversine = getHaversine(latDiffRad, lonDiffRad, lat1Rad, lat2Rad);
    //get angular distance in radians
    const angularDistRad = getAngularDistance(haversine);
    //multiply angular distance in radians by the radius of the sphere it's on (earth)
    const distanceInMeters = radius * angularDistRad;
    return distanceInMeters;
}

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

function getHaversine(latDiffRad, lonDiffRad, lat1Rad, lat2Rad) {
    return Math.sin(latDiffRad/2) * Math.sin(latDiffRad/2) +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) *
    Math.sin(lonDiffRad / 2) * Math.sin(lonDiffRad / 2);
}

function getAngularDistance (haversine) {
    return 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1-haversine));
}