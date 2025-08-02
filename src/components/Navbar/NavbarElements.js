import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
position:fixed;
padding:25px;
width:100%;
z-index:1;

	
	background-blend-mode: color;
	background-color: rgba(0, 0, 0, 0.4);


@media screen and (max-width:1172px){
      display:none;
  }
`;

export const NavItemList = styled.ul`

`;
export const NavItems = styled.li`
display:inline;
color:white;

`;
export const NavLinks = styled(Link)`
color:white;
font-size:26px;
cursor:pointer;

margin:0 10px 0 10px;
text-decoration:none;
&:hover{
    color:#ffac41
}
    
`;