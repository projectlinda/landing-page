import Link from 'next/link'
import styled from 'styled-components'
import { basePath, spacing } from '../constants'

const FAQSectionStyled = styled.div`
    padding: ${spacing(3)}; 
    max-width: 1440px;
    margin: auto;
`

const LogoStyled = styled.img`        
    cursor: pointer;
    width: 300px;
    margin-bottom: ${spacing(5)}; 
`
const HeadingStyled = styled.div`    
    font-size: 2.4vh;
    font-weight: bold;    
    margin-bottom: ${spacing(2)}; 
`

const TitleStyled = styled.div`    
    font-size: 1.4vh;
    font-weight: bold;        
    margin-bottom: ${spacing(1)}; 
`

const DescStyled = styled.div`    
    font-size: 1vh;
    font-weight: 200;
    text-align: justify;    
    margin-bottom: ${spacing(3)}; 
`


export default function FAQPage() {
    return (
        <FAQSectionStyled>
            <Link href="/">
                <LogoStyled src={`${basePath}/images/logo.svg`}></LogoStyled>
            </Link>
            <HeadingStyled>FAQs</HeadingStyled>
            <br />
            <br />
            <TitleStyled>1. Is the app safe to install and download?</TitleStyled>
            <DescStyled>
                Yes, it is safe and does not contain viruses.
            </DescStyled>
            <TitleStyled>2. When will it be on the app store?</TitleStyled>
            <DescStyled>
                We will soon be launching on Android and we will let you know when!
                Stay tuned and follow our social media pages to keep you updated.
            </DescStyled>
            <TitleStyled>3. When will I be able to start accepting orders?</TitleStyled>
            <DescStyled>
                When you have a verified account, meaning your email is confirmed,
                you will be able to accept orders from users around! Make sure to double check your spam folder
                if you don't see an email from us in your main inbox.
            </DescStyled>
            <TitleStyled>4. How do I register as a merchant?</TitleStyled>
            <DescStyled>
                Simple download the Carinderya Kitchen app and fill out the necessary fields.
                Make sure to input everything correctly!
            </DescStyled>
            <TitleStyled>5. How can I join your viber community?</TitleStyled>
            <DescStyled>
                Download and install viber on your PC or Mobile Phone and click this link below.
            </DescStyled>
            <TitleStyled>6. Are users outside the metro able to use the app?</TitleStyled>
            <DescStyled>
                Yes! The app is free to use anywhere in the Philippines. 
                Although during the pilot, we will be limited to Metro Manila only. 
                Anywhere there's a home, there will be food to share
            </DescStyled>
            <TitleStyled>7. Do you offer delivery services too?</TitleStyled>
            <DescStyled>
                As a matter of fact we are working in partnership with Vroom Vroom PH. 
                By being a merchant, you and your clients will get discounted rates for food deliveries! Isn't that cool?
            </DescStyled>
        </FAQSectionStyled>
    )
}
