import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {NavLink} from 'react-router-dom';
import React, {useContext, useState} from "react";
import {AuthContext} from "../context";
import {useDispatch} from "react-redux";
import {authorization} from "../http/userAPI";
import {Actions} from "../redux/actions";
import {useHistory} from 'react-router-dom'
import Alert from "../components/UI/alerts/Alert";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({code: 666, message: ''});
    const {setIsAuth} = useContext(AuthContext);
    const dispatch = useDispatch()
    const history = useHistory();

    const formSubmit = async (event) => {
        try {
            event.preventDefault();

            const response = await authorization(login, password);
            console.log(response);

            if(login!=='') {
                dispatch(Actions.insertLogin(login));
            }
            if(response.email){
                dispatch(Actions.insertEmail(response.email));
            }
            setIsAuth(true);

            history.push('/profile');
        } catch (e) {
            setError({
                code: e.response.status,
                message: e.response.data.message
            });
        }
    }

    return (
        <div className='opacity'>
            <TransitionGroup>
                {error.message &&
                <CSSTransition
                    id={Date.now()}
                    timeout={600}
                    classNames="alertPane"
                >
                    <Alert code={error.code} message={error.message} clear={setError}/>
                </CSSTransition>
                }
            </TransitionGroup>

            <div className='log_container'>
                <h1>Авторизация</h1>

                <form onSubmit={event => formSubmit(event)}>
                    <MyInput
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder='Введите логин'
                        type='login'
                    />
                    <MyInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Введите пароль'
                        type='password'
                    />
                    <div>
                        <div className='link'>
                            Нет аккаунта? <NavLink to='/registration'>Зарегистрируйтесь!</NavLink>
                        </div>
                        <MyButton>Войти</MyButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;