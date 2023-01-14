import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { PageTransition } from '@steveeeie/react-page-transition';
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "white",
    color: "white",
    height: "100%",
    // overflowY: "auto",
  },
}));

function App() {
  

  const classes = useStyles();

  return (
<BrowserRouter>
<div className={classes.App}>
      <Header />
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="fall"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
              <Route path="/" component={Homepage} exact />
             <Route path="/coins/:id" component={CoinPage} exact />
              </Switch>
            </PageTransition>
          );
        }}
      />
      </div>
    </BrowserRouter>
  );
}

export default App;


