import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";
// import useFirebase from "../Hooks/useFirebase";
// import useFirebase from "../Hooks/useFirebase";



function PrivateRoute({ children, ...rest }) {
    const {user} = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user?.displayName ? (
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