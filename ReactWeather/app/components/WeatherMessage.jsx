var React = require('react');


var WeatherMessage = ({temp, location}) => {
    return (
        <div className="text-center">
            <p>The temperature in {location} is {temp}</p>
        </div>
    );
};

module.exports = WeatherMessage;