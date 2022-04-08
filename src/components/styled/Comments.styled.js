import styled from 'styled-components';

const CommentsWrapper = styled.div`
    background-color: var(--primary-color);
    
    & > h4 {
        margin-left: var(--post-card-margin);
        margin-block: var(--post-card-margin);
    }
`

export {
    CommentsWrapper
};