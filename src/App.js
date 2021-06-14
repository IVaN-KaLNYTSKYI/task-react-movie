import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MoviesList from "./components/movie-list/MoviesList";
import MovieDetail from "./components/movie-detail/MovieDetail";
import Header from "./components/header/Header";


function App() {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path={"/"} render={() => {
                        return <MoviesList/>
                    }}/>
                    <Route path={`/movies/:id`} render={({match: {params: {id}}}) => {
                        return <MovieDetail id={id}/>
                    }}/>

                    }}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
