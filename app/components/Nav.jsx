let React = require('react'),
    {Link, IndexLink} = require('react-router'),
    Nav = () => {
        return (
          <div className="top-bar">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">React Timer App</li>
                <li>
                  <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
                </li>
                <li>
                  <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Count Down</Link>
                </li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li className="menu-text">
                  Created by <a href="https://github.com/awebrown" target="_blank">ME</a>
                 </li>
              </ul>
            </div>
          </div>
        );
      }

module.exports = Nav;
