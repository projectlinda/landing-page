import styled from 'styled-components';
import { basePath, spacing } from '../constants';

const MokcupImageStyled = styled.img`
    width: 100%;
    padding: 0 ${spacing(2)};
`;

const LeftContent = styled.section`
    margin-top: ${spacing(3)}; 
    padding: 0 ${spacing(3)};
`;

const LogoStyled = styled.img`        
    width: 250px;
`;

const SloganStyled = styled.label`
    display: block;
    font-size: 1.3rem;
    font-weight: medium;
    text-transform: uppercase;

    margin-top: ${spacing(1)}; 
`;

const DescStyled = styled.div`
    font-size: 0.8rem;    
    font-weight: 200;
    text-align: justify;

    margin-top: ${spacing(3)}; 
`;

const GooglePlayStyled = styled.img`        
    margin-top: ${spacing(5)}; 
`;


export default function HomePage() {
    return (
        <section>
            <MokcupImageStyled src={`${basePath}/images/mockup.png`}></MokcupImageStyled>
            <LeftContent>
                <LogoStyled src={`${basePath}/images/logo.svg`}></LogoStyled>
                <SloganStyled>Good Food Begins at Home</SloganStyled>
                <DescStyled>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</DescStyled>
                <GooglePlayStyled src={`${basePath}/images/google-play.png`}></GooglePlayStyled>
            </LeftContent>            
        </section>
    )
}
