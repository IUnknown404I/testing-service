import React, {useEffect} from 'react';
import {earth, pointerMove} from "../earth/earth";
import MyButton from "../components/UI/button/MyButton";

const CourseEco = () => {

    useEffect(() => {
        document.querySelector('.App').style.background = 'black';
        earth();

        return () => {
            document.querySelector('.App').style.background = '#F5FEFF';
            document.removeEventListener('pointermove', (event) => {pointerMove(event)});
        }
    }, []);

    return (
        <div className='course_eco__main'>
            <div className='eco_info'>
                <h1>Обеспечение экологической <br/>безопасности</h1><br/>
                <br/><br/>Длительность:.<br/>
                72ч.<br/>
                <br/><br/>Объём:<br/>
                3 раздела<br/>
                <br/><br/>Валидация:<br/>
                тестирование<br/>

                <MyButton>Начать изучение</MyButton>
            </div>

            <div className='earth'>
                <canvas className='canvas_Earth'/>
            </div>
        </div>
    );
};

export default CourseEco;