import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { resetDropdown } from '../features/classDropdownToggle/classDropdownToggleSlice';
import { selectJoinedClasses, updateCurrentClass } from '../features/classes/classSlice';
import { hideMoreMenu } from '../features/sidebar/sidebarSlice';
import { ClassNavDropdownContainer } from './styled/Navbar.styled';


function ClassNavDropdown({ className }) {
    const joinedClasses = useSelector(selectJoinedClasses);
    const dispatch = useDispatch();

    const handleClick = (cls) => {
        dispatch(hideMoreMenu());
        dispatch(resetDropdown());
        dispatch(updateCurrentClass(cls));
    };

    return (
        <ClassNavDropdownContainer>
            {
                joinedClasses.length !== 0
                    ? joinedClasses.map((cls) => (
                        <div key={cls.c_id}>
                            <Link onClick={() => { handleClick(cls) }} to={`/dashboard/${cls.c_id}`}>{cls.c_id}</Link>
                        </div>
                    ))
                    : <Link onClick={handleClick} to="#">you have no classes yet.</Link>
            }
        </ClassNavDropdownContainer>
    )
}

export default ClassNavDropdown;