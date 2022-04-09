import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleManageClass, selectManageClass } from '../../../features/mainContentToggle/mainContentToggleSlice';
import ManageDiscussions from './ManageDiscussions';
import ManageEnrollment from './ManageEnrollment';
import ManageGeneralSettings from './ManageGeneralSettings';
import ManageQnA from './ManageQnA';
import styled from 'styled-components';

function ManageClassTab() {
    const manageClassToggle = useSelector(selectManageClass);
    const dispatch = useDispatch();

    return (
        <ManageClassContainer>
            <ManageClassNav>
                <li onClick={() => { dispatch(toggleManageClass('general')) }}>General</li>
                <li onClick={() => { dispatch(toggleManageClass('QnA')) }}>QnA</li>
                <li onClick={() => { dispatch(toggleManageClass('discussions')) }}>Discussions</li>
                <li onClick={() => { dispatch(toggleManageClass('enrollment')) }}>Enrollment</li>
            </ManageClassNav>

            {manageClassToggle === 'general' && <ManageGeneralSettings />}
            {manageClassToggle === 'QnA' && <ManageQnA />}
            {manageClassToggle === 'discussions' && <ManageDiscussions />}
            {manageClassToggle === 'enrollment' && <ManageEnrollment />}
        </ManageClassContainer>
    );
}

const ManageClassContainer = styled.div`
    
`

const ManageClassNav = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 5px solid var(--gray-color);
    padding-bottom: var(--post-card-margin);
    margin-bottom: var(--post-card-margin);

    & > li {
        /* border: 2px solid green; */
        margin-top: calc(var(--post-card-margin) / 2);
        /* margin-left: calc(var(--post-card-margin) / 2); */
        margin-right: calc(var(--post-card-margin) * 2);
        font-weight: var(--fw-bold);
        cursor: pointer;
    }
`

export default ManageClassTab;