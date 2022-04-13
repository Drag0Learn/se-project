import styled from 'styled-components';

const CommentsWrapper = styled.div`
    background-color: var(--primary-color);
    
    & > h4 {
        margin-left: var(--post-card-margin);
        margin-block: var(--post-card-margin);
    }
`

const CommentContainer = styled.div`
    border: 2px solid var(--gray-color);
    min-height: calc(var(--post-card-size) * 2);
    border-radius: var(--div-border-radius);
    margin-bottom: var(--post-card-margin);
    padding-top: calc(var(--post-card-margin) / 2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .comment__container {
        margin-inline: calc(var(--post-card-margin) / 2);
    }

    & .comment-btn-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: calc(var(--post-card-margin) / 2);
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