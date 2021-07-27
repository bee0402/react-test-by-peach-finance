import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Icon, Header, Button } from "semantic-ui-react";

export const Navigation = ({ logout }) => {
  return (
    <div className="ui inverted huge borderless fluid menu">
      <Header as="h1" floated="right">
        <Link to="/" className="header item">
          Widget Depot
        </Link>
      </Header>

      <div className="right menu">
        <div className="ui simple dropdown item">
          <Header as="h2" floated="right">
            <Button icon>
              <Icon name="user circle" />
              <i className="dropdown icon" />
            </Button>
          </Header>
          <div className="menu">
            <Link id="profile" to="/" className="item">
              Profile
            </Link>
            <div className="divider" />
            <a id="logout" onClick={logout} className="item">
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Validate propTypes
Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Navigation;
