import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from "react-router-dom";
import Home from './pages/Home'
import Posts from './pages/Posts'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './components/Navbar'


const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route path="/posts">
						<Posts />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
                    <Route path="/signup">
						<Signup />
					</Route>
                    <Route path="/login">
						<Login />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

ReactDOM.render(<App />, document.querySelector("#root"));