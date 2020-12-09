import React, { useState } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import "./App.css";
import ToolBar from "./components/ToolBar/ToolBar";
import HomeContainer from "./containers/HomeContainer/HomeContainer";
import SearchResult from "./containers/SearchResult/SearchResult";
import RecipeContainer from "./containers/RecipeContainer/RecipeContainer";
import CategoryContainer from "./containers/CategoryContainer/CategoryContainer";
import Error from "./Error/Error";
import FomrContainer from "./containers/FormContanier/FormContainer";
import Welcome from "./containers/Welcome/Welcome";

function App() {
  const history = useHistory();
  const [searchVal, setSearchVal] = useState("pizza");

  return (
    <div className="App">
      <ToolBar history={history} setSearchVal={setSearchVal} />

      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/category" exact component={CategoryContainer} />
        <Route
          path="/categoryTab/:tabTag"
          exact
          render={({ match }) => (
            <CategoryContainer tabTag={match.params.tabTag} />
          )}
        />
        <Route
          path="/category/:category"
          exact
          render={({ match }) => (
            <SearchResult category={match.params.category} />
          )}
        />
        <Route
          path="/recipe/:recipeId"
          exact
          render={({ match }) => (
            <RecipeContainer recipeId={match.params.recipeId} />
          )}
        />
        <Route path="/signup" exact render={()=>(<FomrContainer formType="signUp" history={history}/>)}/>
        <Route path="/signin" exact render={()=>(<FomrContainer formType="signIn" history={history}/>)}/>
        <Route
          path="/welcome/:uname"
          exact
          render={({ match }) => (
            <Welcome uname={match.params.uname}/>
          )}
        />
        <Route
          path="/welcome/:uname/:fname/:lname/:email/:tel/:gender"
          exact
          render={({ match }) => (
            <Welcome uname={match.params.uname} fname={match.params.fname} lname={match.params.lname} email={match.params.email} tel={match.params.tel} gender={match.params.gender}/>
          )}
        />

        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
