import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';


const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/connexion' : LoginPage,
  '/inscription' : RegisterPage
};

export default routes;
