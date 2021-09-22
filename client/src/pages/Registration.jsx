import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Registration = () => {
    return (
        <div className='opacity'>

            <div className='reg_container'>
                <h1>Регистрация</h1>

                <form>
                    <MyInput
                        placeholder='Введите логин'
                        type='login'
                    />
                    <MyInput
                        placeholder='Введите пароль'
                        type='password'
                    />
                    <MyInput
                        placeholder='Введите вашу почту'
                        type='email'
                    />
                    <p>
                        <MyButton>Очистить</MyButton>
                        <MyButton>Создать пользователя</MyButton>
                    </p>
                </form>
            </div>

        </div>
    );
};

export default Registration;