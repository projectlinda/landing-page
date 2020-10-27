import styled from 'styled-components';
import { basePath, spacing } from '../constants';

const AboutPageStyled = styled.section`
    background-color: ${({theme}) => theme.lightGrey};
    display: flex;
    flex-direction: column;
    padding: ${spacing(3)}; 

    @media only screen and (min-device-width: 768px) {
        align-items: center;
        flex-direction: row;        
        justify-content: space-between;
    }
`;

const AboutImageStyled = styled.img`    
    padding: 0 ${spacing(2)};    
`;

const LeftContent = styled.section`    
    max-width: 650px;

    margin-top: ${spacing(3)}; 
    padding: 0 ${spacing(3)};
`;

const TitleStyled = styled.div`    
    font-size: 3.8rem;
    font-weight: bold;    

    margin-top: ${spacing(5)}; 
`;

const DescStyled = styled.div`    
    font-size: 1.5rem;
    font-weight: 200;
    text-align: justify;

    padding: ${spacing(3)} 0; 
`;


export default function AboutPage() {
    return (
        <AboutPageStyled>
            <AboutImageStyled src={`${basePath}/images/about-image.svg`}></AboutImageStyled>
            <LeftContent>
                <TitleStyled>Our Mission</TitleStyled>
                <DescStyled>With our skills and expertise, we provide emphasis on quality, reliability and convenience to build confidence and long lasting relationship with our partners.</DescStyled>
                <TitleStyled>Our Vision</TitleStyled>
                <DescStyled>To provide the knowledge in applying technology  to create, improve and establish business opportunities to communities locally and globally in food services.</DescStyled>
            </LeftContent>            
        </AboutPageStyled>
    )
}
