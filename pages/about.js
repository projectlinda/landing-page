import styled from 'styled-components';
import { basePath, spacing } from '../constants';

const AboutPageStyled = styled.section`
    background-color: ${({ theme }) => theme.lightGrey};
`;

const AboutPageContainerStyled = styled.section`    
    align-items: center;
    display: flex;
    flex-direction: column;    
    margin: auto;
    height: 80vh;
    justify-content: center;
    max-width: 1400px;

    padding: ${spacing(3)};

    @media only screen and (min-device-width: 1024px) {
        align-items: center;
        flex-direction: row;        
        justify-content: space-between;
    }
`;

const AboutImageStyled = styled.img`        
    width: 100%;  
    max-width: 550px;        
    padding: 0 ${spacing(2)};    

    @media only screen and (min-device-width: 1024px) {
        max-width: 450px;
    }  

    @media only screen and (min-device-width: 1440px) {
        max-width: 650px;
    }
`;

const LeftContent = styled.section`       
    align-items: center;
    display: flex;
    flex-direction: column;   
    max-width: 650px;
    
    margin-top: ${spacing(3)}; 
    padding: 0 ${spacing(3)};

    @media only screen and (min-device-width: 1024px) {
        display: block;   
    }
`;

const TitleStyled = styled.div`    
    font-size: 3.8rem;
    font-weight: bold;        
`;

const Spacer = styled.div`
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
        <AboutPageStyled id="about">
            <AboutPageContainerStyled>
                <AboutImageStyled src={`${basePath}/images/about-image.svg`}></AboutImageStyled>
                <LeftContent>
                    <TitleStyled>Our Mission</TitleStyled>
                    <DescStyled>With our skills and expertise, we provide emphasis on quality, reliability and convenience to build confidence and long lasting relationship with our partners.</DescStyled>
                    <Spacer />
                    <TitleStyled>Our Vision</TitleStyled>
                    <DescStyled>To provide the knowledge in applying technology  to create, improve and establish business opportunities to communities locally and globally in food services.</DescStyled>
                </LeftContent>
            </AboutPageContainerStyled>
        </AboutPageStyled>
    )
}
