var express = require('express');
var router = express.Router();


function getDistance(lon1, lat1, lon2, lat2) {
    // return distance in meters

    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;

    var deltaLat = lat2 - lat1;
    var deltaLon = lon2 - lon1;

    var a = Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var EARTH_RADIUS = 6371;
    return c * EARTH_RADIUS * 1000;
}

/***
 * GET distance listing.
 * @param {float} start_lng - longitude of start
 * @param {float} start_lat - latitude of start
 * @param {float} finish_lng - longitude of finish
 * @param {float} finish_lat - latitude of finish
 * @return {float} distance - distance in meters
 */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    console.log(req.query);
    

    var start_lng = parseFloat(req.query.start_lng);
    var start_lat = parseFloat(req.query.start_lat);
    var finish_lng = parseFloat(req.query.finish_lng);
    var finish_lat = parseFloat(req.query.finish_lat);
    console.log(start_lng, start_lat, finish_lng, finish_lat);
    var distance = getDistance(start_lng, start_lat, finish_lng, finish_lat);
    console.log(distance);
    res.send(distance.toString());
});

module.exports = router;
