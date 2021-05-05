import styled from 'styled-components';

export const SkillWrapper = styled.div`
    height:50vh;
    width:100%;
    background:#323232
`;
export const SkillContent = styled.div`
    width:1000px;
    margin: auto;
    padding-top:50px;
    
`;
export const SkillH2 = styled.h2`
    font-size:38px;
    color:#eeeeee;
`;
export const SkillIconsBox = styled.div`
    padding:15px;
    width:100%;
    
`;
export const SkillIcon = styled.img`
	margin: 10px 25px 30px 25px;
	width: 70%;
	max-width: 100px;
	max-height: 100px;
	&:hover{
        transition: all 0.2s ease 0s;
        transform: scale(1.1);
    }
 
`;

export const SkillAttribute = styled.div`
    color:white;
`
