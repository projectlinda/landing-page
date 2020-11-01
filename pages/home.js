import styled from 'styled-components';
import { basePath, spacing } from '../constants';

const HomePageStyled = styled.section`
    display: flex;
    flex-direction: column;    
    height: 80vh;
    justify-content: center;
    margin: auto;
    max-width: 1400px;    
    
    padding: ${spacing(3)}; 
    
    @media only screen and (min-device-width: 768px) {
        align-items: center;
        flex-direction: row;
        flex-flow: row-reverse;
        justify-content: space-between;
    }
`;

const MokcupImageStyled = styled.img`
    width: 100%;
    padding: 0 ${spacing(2)};

    @media only screen and (min-device-width: 768px) {
        width: 50%;
    }

    @media only screen and (min-device-width: 1024px) {
        max-width: 600px;
    }
`;

const LeftContent = styled.section`
    max-width: 500px;
    
    margin-top: ${spacing(3)}; 
    padding: 0 ${spacing(3)};
`;

const LogoStyled = styled.img`        
    width: 250px;

    @media only screen and (min-device-width: 1024px) {
        width: 300px;
    }
`;

const SloganStyled = styled.label`
    display: block;
    font-size: 2rem;
    font-weight: medium;
    text-transform: uppercase;

    margin-top: ${spacing(1)}; 
`;

const DescStyled = styled.div`    
    font-size: 1.5rem;
    font-weight: 200;
    text-align: justify;

    margin-top: ${spacing(3)}; 
`;

const GooglePlayStyled = styled.img`        
    margin-top: ${spacing(5)}; 
`;


export default function HomePage() {
    return (
        <HomePageStyled id="home">
            <MokcupImageStyled src={`${basePath}/images/mockup.png`}></MokcupImageStyled>
            <LeftContent>
                <LogoStyled src={`${basePath}/images/logo.svg`}></LogoStyled>
                <SloganStyled>Good Food Begins at Home</SloganStyled>
                <DescStyled>Start your first online restaurant with us or browse through a wide selection food specialties from your neighborhood!</DescStyled>
                <GooglePlayStyled src={`${basePath}/images/google-play.png`}></GooglePlayStyled>
            </LeftContent>            
        </HomePageStyled>
    )
}
