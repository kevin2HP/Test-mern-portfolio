import styled from 'styled-components';


export const AboutWrapper = styled.div`
    width:100%;
    padding:30px 0 ;
    background:#000;
`;

export const AboutContent = styled.div`
overflow:hidden;
    width:70%;
    margin:auto;    
    
@media screen and (max-width:1172px){
    width:100%;

}
`
export const AboutText = styled.div`
    width:45%;
    float:left;
    padding:35px 0;
    padding-left:50px;
    
@media screen and (max-width:1172px){
    width:100%;
    padding:0;
}
`;

export const AboutH2 = styled.h2`
	font-family: Montserrat, sans-serif;
	font-size: 38px;
	color: rgb(238, 238, 238);

`;

export const AboutP = styled.p`
color:#d8e3e7;
line-height:30px;
color:#687980;
@media screen and (max-width:1172px){
    width:100%;
    font-size:14px;
line-height:20px;
padding:10px;

}
`;

export const AboutImgBox = styled.div`
text-align:center;
border-radius: 2px;


`;
export const AboutImg = styled.img`
    width:300px;

    padding:10px;
    cursor:pointer;

    @media screen and (max-width:1172px){
        width:250px;
    }

    `;
