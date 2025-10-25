import React from 'react';
import Done from "../Icons/Done";

export const Success = ({count}) => {
    return (
        <div className="success-block">
            <Done width={"50px"} height={"50px"}/>
            <h3>Успешно!</h3>
            <p>Всем {count} пользователям отправлено приглашение.</p>
            <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
        </div>
    );
};