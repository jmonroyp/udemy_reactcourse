var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function () {
//         var location = this.props.location;
//         var temp = this.props.temp;
//         return (
//             <div>
//                 <p>The temperature in {location} is {temp}</p>
//             </div>
//         );
//     }
// });

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <p>The temperature in {location} is {temp}</p>
        </div>
    );
};

module.exports = WeatherMessage;