const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=7ff9bcf566d1f7d34b27d084cb9dd391&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to get forecast.", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try again", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degreees out and feels like ${body.current.feelslike} degrees out.`
      );
    }
  });
};
module.exports = forecast;
