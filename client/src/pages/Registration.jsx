import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {NavLink} from 'react-router-dom';
import React, {useContext, useState} from "react";
import {registration} from "../http/userAPI";
import {useDispatch} from "react-redux";
import {AuthContext} from "../context";
import {Actions} from "../redux/actions";
import {useHistory} from 'react-router-dom'
import Alert from "../components/UI/alerts/Alert";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Registration = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState({code: 666, message: ''});
    const {setIsAuth} = useContext(AuthContext);
    const dispatch = useDispatch()
    const history = useHistory();

    const formSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await registration(login, password, email);
            console.log(response);

            if(login!=='') {
                dispatch(Actions.insertLogin(login));
            }
            if(email!==''){
                dispatch(Actions.insertEmail(email));
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

            <div className='reg_container'>
                <h1>Регистрация</h1>

                <form onSubmit={event => formSubmit(event)}>
                    <MyInput
                        placeholder='Введите логин'
                        type='login'
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <MyInput
                        placeholder='Введите пароль'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <MyInput
                        placeholder='Введите вашу почту'
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div>
                        <div className='link'>
                            Есть аккаунт? <NavLink to='/login'>Войдите!</NavLink>
                        </div>
                        <MyButton>Создать пользователя</MyButton>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Registration;