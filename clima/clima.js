const axios = require("axios");

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=56f6fb93ef2492e37de9b386428d06b2`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
};