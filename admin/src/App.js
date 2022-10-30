import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import MoviesList from './pages/moviesList/MoviesList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';

function App() {
    const { user } = useContext(AuthContext);
    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    {/* {user ? <Redirect to="/" /> : <Login />} */}
                    <Login />
                </Route>
                {user && (
                    <>
                        {' '}
                        <Topbar />
                        <div className="container">
                            <Sidebar />

                            <Route exact path="/">
                                <Home />
                            </Route>

                            <Route path="/users">
                                <UserList />
                            </Route>
                            <Route path="/user/:userId">
                                <User />
                            </Route>
                            <Route path="/newUser">
                                <NewUser />
                            </Route>
                            <Route path="/movies">
                                <MoviesList />
                            </Route>

                            <Route path="/product/:productId">
                                <Product />
                            </Route>
                            <Route path="/newproduct">
                                <NewProduct />
                            </Route>
                        </div>
                    </>
                )}
            </Switch>
        </Router>
    );
}

export default App;
