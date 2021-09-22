import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div className='opacity'>

            <div className='log_container'>
                <h1>Авторизация</h1>

                <form>
                    <MyInput
                        placeholder='Введите логин'
                        type='login'
                    />
                    <MyInput
                        placeholder='Введите пароль'
                        type='password'
                    />
                    <p>
                        <MyButton>Войти</MyButton>
                        <MyButton>Зарегистрироваться</MyButton>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;