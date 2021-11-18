import React from 'react';
import CourseItem from "../components/CourseItem";
import NavBar from "../components/UI/navbar/NavBar";

const Courses = () => {
    return (
        <>
            <NavBar/>

            <div className='courses_main'>
                <h1 className='courses__definition' style={{textAlign: 'center'}}>Доступные для прохождения курсы</h1>

                <CourseItem/>
            </div>
        </>
    );
};

export default Courses;