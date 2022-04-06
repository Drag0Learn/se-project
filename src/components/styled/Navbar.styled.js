import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media, mediaScreenSize } from '../../common/helpers/mediaQuery';


const NavbarContainer = styled.div`
    height: var(--navbar-height);
    position: relative;
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
        gap: var(--post-card-margin);
    }
`

const LogoSection = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    /* border: 5px solid red; */

    ${media.mobile} {
        justify-content: center;
    }
    
    ${media.desktop} {
        flex: 0.3;
        justify-content: space-between;
    }
`

const MoreSection = styled.div`
    /* border: 5px solid var(--secondary-color); */
    position: relative;
    height: 100%;
    
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
            
            & * {
                z-index: 99999;
            }
            
            ${media.mobileSmall} {
                width: 100vw;
                border-left: none;
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
    /* border: 5px solid lightgreen; */
    list-style: none;
    display: flex;
    align-items: center;

    ${media.mobile} {
        flex-direction: column;
        justify-content: center;
    }

    ${media.desktop} {
        flex: 0.85;
        gap: calc(var(--post-card-margin) * 2);
        /* border: 5px solid lightgreen; */
    }
`

const ButtonGroup = styled.div`
    display: flex;
    /* border: 5px solid black; */
    margin-inline: var(--post-card-margin);
    
    ${media.mobile} {
        margin-top: calc((var(--post-card-margin) * 2) + var(--navbar-height) / 2);
        flex: 0.15;
        height: var(--navbar-height);
        flex-direction: column;
        justify-content: center;
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
        top: var(--navbar-height);
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
        /* border: 5px solid blue; */
        /* margin-left: 3em; */
        font-weight: var(--fw-extra-bold);

        ${media.desktop} {
            margin-left: var(--post-card-margin);
        }
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
    top: calc((var(--navbar-height) - calc(var(--post-card-margin) * 2.3)) / 2.3);
    right: var(--post-card-margin);
    width: calc(var(--post-card-margin) * 2.3);
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