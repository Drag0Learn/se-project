import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { resetDropdown } from '../features/classDropdownToggle/classDropdownToggleSlice';
import { selectCurrentClass, selectJoinedClasses } from '../features/classes/classSlice';
import { toggleContent } from '../features/mainContentToggle/mainContentToggleSlice';
import { updateCurrentDiscussion } from '../features/posts/postSlice';
import { DiscussionListContainer, DiscussionListItem } from './styled/DiscussionList.styled';

function DiscussionList() {
    const joinedClasses = useSelector(selectJoinedClasses);
    const currentClass = useSelector(selectCurrentClass);
    const dispatch = useDispatch();

    const handleClick = (discussion) => {
        dispatch(updateCurrentDiscussion(discussion));
        dispatch(resetDropdown());
        dispatch(toggleContent('other'));
    }

    return (
        <DiscussionListContainer>
            <DiscussionListItem onClick={() => { handleClick('') }}>All</DiscussionListItem>
            {
                (joinedClasses.length !== 0 && currentClass?.discussions.length !== 0)
                    ?
                    currentClass?.discussions.map(discussion => (
                        <DiscussionListItem onClick={() => { handleClick(discussion) }} key={discussion}>{discussion}</DiscussionListItem>
                    ))
                    :
                    (
                        <></>
                    )
            }
        </DiscussionListContainer>
    );
}

export default DiscussionList;