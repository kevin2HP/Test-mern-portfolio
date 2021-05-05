import styled from 'styled-components';

export const HeroWrapper = styled.div`
    color:white;
	display: flex;
    justify-content:center;
	align-items: center;
	height: 100vh;

`;
export const HeroBG = styled.img`
    position:absolute;
    height:100vh;
    z-index:-1;
    width:100%;
    @media (max-width: 768px) {
        object-fit: cover;
      }

`;
export const HeroContent = styled.div`
    width:500px;
text-align:center;

`;

export const HeroH1 = styled.h1`
font-family: 'Roboto', sans-serif;
font-size:72px;
color:#eeeeee;

`;

export const HeroH3 = styled.h3`
font-family: 'Montserrat', sans-serif;
font-size:42px;
color:#ffac41

`;

export const HeroDate = styled.p`
`;