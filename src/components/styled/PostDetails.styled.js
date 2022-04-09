import styled from 'styled-components';

const PostDetailsContainer = styled.div`
    background-color: var(--primary-color);
`

const PostBox = styled.div`
    margin-bottom: var(--post-card-margin);

    & .post-btn-container {
        display: flex;
        justify-content: space-between;
    }
`

const EditDeleteBtnGroup = styled.div`

`

export {
    PostDetailsContainer,
    PostBox,
    EditDeleteBtnGroup
};