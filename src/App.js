import { HashRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Database from "./pages/Database";
import Storage from "./pages/Storage";
import Hosting from "./pages/Hosting";
import Functions from "./pages/Functions";
import MlKit from "./pages/MlKit";
import Performance from "./pages/Performance";
import Analytics from "./pages/Analytics";
import TestLab from "./pages/TestLab";
import SignIn from "./pages/SignIn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const NotFound = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid style={{ textAlign: "center" }}>
        <Typography variant="h2" gutterBottom>
          Page not found
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Sorry, the page you are looking for could not be found.
        </Typography>
        <Typography>
          <Link to="/authentication">Go to Home </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         <Redirect to="/authentication" />
        </Route>
        <Route exact path="/authentication" component={Authentication} />
        <Route exact path="/database" component={Database} />
        <Route exact path="/hosting" component={Hosting} />
        <Route exact path="/functions" component={Functions} />
        <Route exact path="/storage" component={Storage} />
        <Route exact path="/ml-kit" component={MlKit} />
        <Route exact path="/performance" component={Performance} />
        <Route exact path="/analytics" component={Analytics} />
        <Route exact path="/test-lab" component={TestLab} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
