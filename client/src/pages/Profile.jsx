import React from 'react';
import reduxStore from "../redux/store";

const Profile = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Пользователь: {reduxStore.getState().login}</h2>
        </div>
    );
};

export default Profile;