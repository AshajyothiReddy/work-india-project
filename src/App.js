import {BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import Header from './components/Header';
import HomePage from './components/HomePage';
import TopRatedMovies from './components/TopRated';
import UpcomingMovie from './components/UpcomingMoviePage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/top-rated" component={TopRatedMovies} />
        <Route exact path="/upcoming" component={UpcomingMovie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
