import styled from 'styled-components';

const DiscussionListContainer = styled.div`
    background-color: var(--primary-color);
    border: 5px solid orange;
    width: 100%;
    height: var(--navbar-height);
    display: flex;
    align-items: center;
    gap: 1em;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar,
    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
        display: none;
    }
`

const DiscussionListItem = styled.div`
    cursor: pointer;
`

export {
    DiscussionListContainer,
    DiscussionListItem
};