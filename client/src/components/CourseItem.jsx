import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from 'react-router-dom';

const CourseItem = () => {
    const router = useHistory();

    return (
        <div className='course__variant'>
            <div className='course__variant__content'>
                <strong>1. «Обеспечение экологической безопасности руководителями и специалистами общехозяйственных систем управления»</strong>

                <div style={{marginTop: '7px'}} className='course__variant__info'>
                    <span>Дополнительная профессиональная программа повышения квалификации. – СПб: НОЦ ООО «Газпром межрегионгаз инжиниринг», 2021.</span>

                    <MyButton style={{marginLeft: '15px'}} onClick={() => router.push('/courses/eco')}>
                        Перейти
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default CourseItem;