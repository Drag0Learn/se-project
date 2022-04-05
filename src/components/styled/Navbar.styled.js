import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media, mediaScreenSize } from '../../common/helpers/mediaQuery';


const NavbarContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: var(--primary-color);

    ${media.mobileSmall} {
        &.make-z-index-big {
            z-index: 99999;
        }
    }
    
    ${media.desktop} {
        display: flex;
        align-items: center;
    }
`

const LogoSection = styled.div`
    display: flex;
    justify-content: space-between;
    border: 5px solid red;
    
    ${media.desktop} {
        flex: 0.3;
    }
`

const MoreSection = styled.div`
    border: 5px solid var(--secondary-color);
    position: relative;
    
    ${media.mobile} {
        display: none;
        height: 100%;
        
        &.more-menu-is-open {
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: 99999;
            background-color: var(--primary-color);
            width: min(${mediaScreenSize.mobileSmallMax}, 75vw);
            border-left: 5px solid var(--gray-color);
            
            ${media.mobileSmall} {
                width: 100vw;
            }
        }
    }

    ${media.desktop} {
        display: flex;
        flex: 0.7;
        justify-content: space-between;
    }

`

const NavList = styled.ul`
    list-style: none;
    display: flex;

    ${media.mobile} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    ${media.desktop} {
        flex: 0.85;
        justify-content: space-between;
        border: 5px solid lightgreen;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    
    ${media.mobile} {
        flex: 0.15;
        flex-direction: column;
    }
`


const NavClassContainer = styled.div`
    display: flex;
    ${media.mobile} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const NavItem = styled.li`
    font-weight: var(--fw-bold);
    cursor: pointer;
    position: relative;
`

const ClassNavDropdownContainer = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    background-color: var(--white-color);
    
    ${media.desktop} {
        position: absolute;
        border-radius: 1em;
        top: 30px;
        width: 200px;
        height: 200px;
    }
`

const NavigationLink = styled(Link)`
    text-decoration: none;
    color: var(--black-color);

    &:hover {
        border-bottom: 1px solid var(--secondary-color);
    }

    &:visited {
        decoration: none;
    }

    &.logo {
        font-weight: var(--fw-extra-bold);
    }

    &.logo:hover {
        border: none;
    }
`

const LogoutBtn = styled.button`
`

const MoreVertIcon = styled.svg`
    ${media.desktop} {   
        display: none;
    }

    position: fixed;
    top: 0;
    right: 0;
    width: 2em;
    z-index: 9999;
    cursor: pointer;
    
    &:hover {
        color: var(--dark-secondary-color);
    }
`

const CloseIcon = styled(MoreVertIcon)`
    z-index: 999999;
`

export {
    NavbarContainer,
    LogoSection,
    MoreSection,
    ButtonGroup,
    NavList,
    NavClassContainer,
    NavItem,
    ClassNavDropdownContainer,
    NavigationLink,
    LogoutBtn,
    MoreVertIcon,
    CloseIcon
};