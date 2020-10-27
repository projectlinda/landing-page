import styled from 'styled-components';

const MokcupImageStyled = styled.img`
    width: 100%;
    padding: 0 ${props => props.theme.spacingUnit(2)};
`;

const LeftContent = styled.section`
    margin-top: ${props => props.theme.spacingUnit(3)}; 
    padding: 0 ${props => props.theme.spacingUnit(3)};
`;

const LogoStyled = styled.img`        
    width: 250px;
`;

const SloganStyled = styled.label`
    display: block;
    font-size: 1.3rem;
    font-weight: medium;
    text-transform: uppercase;

    margin-top: ${props => props.theme.spacingUnit(1)}; 
`;

const DescStyled = styled.div`
    font-size: 0.8rem;    
    font-weight: 200;
    text-align: justify;

    margin-top: ${props => props.theme.spacingUnit(3)}; 
`;

const GooglePlayStyled = styled.img`        
    margin-top: ${props => props.theme.spacingUnit(5)}; 
`;


export default function HomePage() {
    return (
        <section>
            <MokcupImageStyled src="/images/mockup.png"></MokcupImageStyled>
            <LeftContent>
                <LogoStyled src="/images/logo.svg"></LogoStyled>
                <SloganStyled>Good Food Begins at Home</SloganStyled>
                <DescStyled>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</DescStyled>
                <GooglePlayStyled src="/images/google-play.png"></GooglePlayStyled>
            </LeftContent>            
        </section>
    )
}
