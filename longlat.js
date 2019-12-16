const lon1Deg = 1.6551; 
const lon2Deg = 1.5757; 
const lat1Deg = 50.7531;
const lat2Deg = 50.8189;
console.log(getDistance(lon1Deg, lat1Deg, lon2Deg, lat2Deg));

function getDistance(lon1Deg, lat1Deg, lon2Deg, lat2Deg) {
    //define location in degrees
    const radius = 6371e3; // radius of earth in meters
    //define locations in radians
    const lat1Rad = lat1Deg * Math.PI / 180;
    const lat2Rad = lon1Deg * Math.PI / 180;
    const latDiffRad = (lat1Deg - lat2Deg) * Math.PI / 180;
    const lonDiffRad = (lon2Deg - lon1Deg) * Math.PI / 180;
    //haversine formula
    const haversine = getHaversine(latDiffRad, lonDiffRad, lat1Rad, lat2Rad);
    //get angular distance in radians
    const angularDistRad = getAngularDistance(haversine);
    //multiply angular distance in radians by the radius of the sphere it's on (earth)
    const distanceInMeters = radius * angularDistRad;
    return distanceInMeters;
}

function getHaversine(latDiffRad, lonDiffRad, lat1Rad, lat2Rad) {
    return Math.sin(latDiffRad/2) * Math.sin(latDiffRad/2) +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) *
    Math.sin(lonDiffRad / 2) * Math.sin(lonDiffRad / 2);
}

function getAngularDistance (haversine) {
    return 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1-haversine));
}