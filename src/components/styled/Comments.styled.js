import styled from 'styled-components';

const CommentsWrapper = styled.div`
    background-color: var(--primary-color);
    
    & > h4 {
        margin-left: var(--post-card-margin);
        margin-block: var(--post-card-margin);
    }
`

const CommentContainer = styled.div`
    & .comment-btn-container {
        display: flex;
        justify-content: space-between;
    }

    & .reply-btn-span {
        margin-inline: var(--post-card-margin);
        cursor: pointer;
    }
`

export {
    CommentsWrapper,
    CommentContainer
};