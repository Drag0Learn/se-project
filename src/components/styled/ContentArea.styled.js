import styled from 'styled-components';
import { media } from '../../common/helpers/mediaQuery';

const ContentAreaWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    /* border: 5px solid red; */
    background-color: var(--white-color);
    /* border-bottom: 0.75em solid var(--primary-color); */

    ${media.desktop} {
        flex: 1;
    }
`

export { ContentAreaWrapper };