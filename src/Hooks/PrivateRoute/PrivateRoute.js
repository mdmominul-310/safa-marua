
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import UseAuth from "../UseAuth/UseAuth";

function PrivateRoute({ children, ...rest }) {
    let {user,isLoading} = UseAuth();
    if(isLoading){
      return   <Spinner animation="border" variant="success" />

    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute;