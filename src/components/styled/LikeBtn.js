import styled from 'styled-components';

const LikeBtn = styled.svg`
    width: 20px;
    cursor: pointer;

    &.liked {
        color: var(--secondary-color);
        fill: var(--secondary-color);
    }
`

export {
    LikeBtn
};