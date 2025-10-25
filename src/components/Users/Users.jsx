import React from 'react';
import {Skeleton} from '../Skeleton/Skeleton';
import {User} from './User';
import Search from "../Icons/Search";

export const Users = ({items, isLoading, searchValue, isInvites, onClickInvites, onChangeSearchValue, onClickSendInvites}) => {
    return (
        <>
            <div className="search">
                <Search/>
                <input type="text" placeholder="Найти пользователя..." value={searchValue} onChange={onChangeSearchValue}/>
            </div>

            {isLoading ? (
                <div className="skeleton-list">
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                </div>
            ) : (
                <ul className="users-list">
                    {
                        items.filter(obj => {
                            const fullName = (obj.first_name + obj.last_name).toLowerCase();
                            if (fullName.includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())) {
                                return true;
                            }
                        })
                        .map((user) => (
                            <User id={user.id} email={user.email} first_name={user.first_name} last_name={user.last_name} avatar={user.avatar} isInvites={isInvites} onClickInvites={onClickInvites}/>
                        ))
                    }
                </ul>
            )}

            <button className="send-invite-btn" onClick={() => onClickSendInvites()} disabled={isInvites.length<=0 ? true : false}>Отправить приглашение</button>
        </>
    );
};

export default Users;