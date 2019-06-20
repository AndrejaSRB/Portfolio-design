import React, { Component } from 'react'
import { Route } from "react-router-dom";

class CustomRoute extends Component {
    render() {
        const { component: Component, ...props } = this.props;
        return (
          <Route
            {...props}
            render={props =>
                <Component {...this.props} />
            }
          />
        );
      }
    }
 
export default CustomRoute;