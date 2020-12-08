import React, { useState } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import "./App.css";
import ToolBar from "./components/ToolBar/ToolBar";
import HomeContainer from "./containers/HomeContainer/HomeContainer";
import SearchResult from "./containers/SearchResult/SearchResult";
import RecipeContainer from "./containers/RecipeContainer/RecipeContainer";
import CategoryContainer from "./containers/CategoryContainer/CategoryContainer";
import Error from "./Error/Error";

function App(props) {
  const [searchVal, setSearchVal] = useState("pizza");
  let history = props.history;
  return (
    <div className="App">

      <ToolBar history={history} setSearchVal={setSearchVal}/>

      <Switch>
        <Route basename="" path="/" exact component={HomeContainer} />
        <Route path="/category" exact component={CategoryContainer} />
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
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
