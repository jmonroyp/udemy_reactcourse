var React = require('react');
var Navigation = require('Navigation');

// var Main = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <Navigation></Navigation>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

var Main = (props) => {
    return (
        <div>
            <Navigation></Navigation>
            {props.children}
        </div>
    );
};

module.exports = Main;
