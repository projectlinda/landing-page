import styled from 'styled-components';
import { basePath, spacing } from '../constants';

const ContactPageStyled = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;    
    margin: auto;    
    justify-content: center;
    max-width: 1400px;

    padding: ${spacing(3)};

    @media only screen and (min-device-width: 1024px) {
        align-items: center;
        flex-direction: row;        
        flex-flow: row-reverse;
        justify-content: space-between;
    }
`;

const ContactImageStyled = styled.img`  
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

const DescStyled = styled.div`    
    font-size: 1.5rem;
    font-weight: 200;
    text-align: justify;

    padding: ${spacing(3)} 0; 
`;

const Button = styled.button`
    color: white;
    text-decoration: none;
    border: none;
    font-size: 1.5rem;

    background-color: ${props => props.theme.primaryColor};
    border-radius: ${spacing(3)};    
    padding: ${spacing(1.5)} ${spacing(3)};    
`;


export default function ContactPage() {

    const onNavigate = () => {
        window.open('https://www.facebook.com/CarinderyaOfficialFB', '_blank')
    }

    return (
        <ContactPageStyled id="contact">
            <ContactImageStyled src={`${basePath}/images/chat.svg`}></ContactImageStyled>
            <LeftContent>
                <TitleStyled>Let's connect!</TitleStyled>
                <DescStyled>You can chat with us on our official facebook group</DescStyled>         
                <Button onClick={() => onNavigate()}>Visit our page</Button>       
            </LeftContent>
        </ContactPageStyled>
    )
}
