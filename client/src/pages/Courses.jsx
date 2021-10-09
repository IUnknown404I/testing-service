import React from 'react';
import CourseItem from "../components/CourseItem";

const Courses = () => {
    return (
        <div className='courses_main'>
            <h1 className='courses__definition' style={{textAlign: 'center'}}>Доступные для прохождения курсы</h1>

            <CourseItem/>
        </div>
    );
};

export default Courses;