import { Link, useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { logOut } from 'src/actions/user';
import { useDispatch } from 'react-redux';


import './navBar.scss';

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout =() => {
    // quand je me dÃ©co, je dispatche mon action logout...
      dispatch(logOut());
      localStorage.removeItem('token');
      // ... et je reviens sur la page d'accueil
      navigate('/');
    }

  const { isLogged } = useSelector((state) => state.user);

    return (
      <div className="NavBar">
        <p className="login">ð¾ <Link className='nav-link' to="/">Home</Link> ð¾</p> 
        {!isLogged ? (
          <>
            <p className="login">ð¾ <Link className='nav-link' to="/loginsignUp">Login</Link> ð¾</p>
          </>
          ) : (
            <>
              <p className="login"> 
               <button
                className='nav-link'
                onClick={handleLogout}>
                
                ð¾ Deconnexion ð¾
                </button>
              </p>
              <p className="login">ð¾ <Link className='nav-link' to="/profil">Profil</Link> ð¾</p>
              <p className="login">ð¾ <Link className='nav-link' to="/favorites">Favoris</Link> ð¾</p>
            </>
          )}
            <p className="login">ð¾ <Link className='nav-link' to="/faq">FAQ</Link> ð¾</p>
      </div>
    );
}

export default NavBar;
