var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples component!</h1>
            <p>Few examples</p>
            <ol>
                <li>
                    <Link to="/?location=Guadalajara">Guadalajara, Mexico</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;