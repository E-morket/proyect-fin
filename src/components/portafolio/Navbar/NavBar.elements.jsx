import styled from 'styled-components';

export const NavbarContainer = styled.div`
width: 100%;
Height: 60px;
position:sticky;
top: 0;
z-index:99;
background-color:#161A1B;
`;
export const NavebarWrapper = styled.div`
margin: auto;
width:100%;
max-width: 1600px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: Space-between;


`;
export const IconLogo= styled.div`
display:flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family: "Oswald";
font-size: 1.2rem;
color: #10eac2;
padding-left: 5%;
`;

export const Menu = styled.ul`
height:100%;
display:flex;
justify-content:center;
align-items:center;

@media screen and (max-width: 960px){
    width: 110%;
    height: 98vh;
    position: absolute;
    margin-top:0%;
    top: 90px;
    left: ${({click}) =>click ?0 : "-100%"};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #161A1B;
}
`;

export const MenuItem = styled.li`
height:100%;
padding:0.5rem 1.5rem;
display: flex;
justify-content:center;
align-items:center;
font-family: "Oswald";
font-size: 1.2rem;
font-weight: 400;

&:hover{
    background-color: #433257;
    border-bottom: 0.3rem solid #10eac2;
    transition: 0.4s ease-in;
    border-radius: 30px;
}
@media screen and (max-width: 960px) {
    width: 100%;
    height:70px;
}
`;
export const MenuItemLink = styled.a`
text-decoration: none;
color: #10eac2;
`;
export const IconLogoMobile = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: flex;
    color: #10eac2;
    font-size:2rem;
    padding-rigth: 2rem;
}
`;
