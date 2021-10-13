import React, {useEffect, useState} from 'react';
import {earth, pointerMove} from "../earth/earth";
import MyButton from "../components/UI/button/MyButton";
import {useHistory} from 'react-router-dom';

const CourseEco = () => {
    const [start, setStart] = useState(false);
    const history = useHistory();

    useEffect(() => {
        document.querySelector('.App').style.background = 'black';
        earth();

        return () => {
            document.querySelector('.App').style.background = '#F5FEFF';
            document.removeEventListener('pointermove', (event) => {pointerMove(event)});
        }
    }, []);

    useEffect(() => {
        if(start) {
            history.push('/courses/eco/1');
        }
    }, [start]);

    return (
        <div className='course_eco__main'>
            <div className='eco_info'>
                <h1 style={{color: 'limegreen'}}>Обеспечение экологической <br/>безопасности</h1><br/>
                <br/><br/>Длительность:.<br/>
                72ч.<br/>
                <br/><br/>Объём:<br/>
                3 раздела<br/>
                <br/><br/>Валидация:<br/>
                тестирование<br/>

                <MyButton onClick={() => {setStart(true)}}>Начать изучение</MyButton>
            </div>

            <div className='earth'>
                <canvas className='canvas_Earth'/>
            </div>
        </div>
    );
};

export default CourseEco;