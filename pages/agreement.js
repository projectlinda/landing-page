import Link from 'next/link'
import styled from 'styled-components'
import { basePath, spacing } from '../constants'

const AgreementSectionStyled = styled.div`
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


export default function AgreementPage() {
    return (
        <AgreementSectionStyled>
            <Link href="/">
                <LogoStyled src={`${basePath}/images/logo.svg`}></LogoStyled>
            </Link>            
            <HeadingStyled>TERMS AND CONDITIONS</HeadingStyled>
            <TitleStyled>Definitions</TitleStyled>
            <br />
            <br />
            <TitleStyled>License to Use</TitleStyled>
            <DescStyled>
                Subject to your agreement to and compliance with the terms of this Agreement, we grant to you a non-
                exclusive, non-transferable, nor sharable, revocable, limited license to use the Service solely for your
                personal, non-commercial use to the Services in accordance with this Agreement. This license does not
                include any right to (a) sell, resell or commercially use the [name of application]; (b) copy, reproduce,
                distribute, publicly display the [name of application]; (c) modify the [name of app], remove any
                proprietary rights, notices or markings or otherwise make any derivative uses of the [name of app]; (d)
                use any date mining, robots or similar date gathering or extraction methods in the [name of app]; (e)
                use the [name of app] other than for their intended purposes.
            </DescStyled>
            <TitleStyled>Prohibited Conduct</TitleStyled>
            <DescStyled>
                You agree to use the App in accordance with these Terms and applicable laws and regulations. You will
                not violate any applicable law, contract, intellectual property or other third-party right or commit a tort,
                and you are solely responsible for your conduct while using the App. In connection with your use of the
                App and the Services, you will not:

                <ul>
                    <li>
                        Engage in harassing, threatening, intimidating, predatory or stalking conduct towards users,
                        non-users and makers of the App;
                    </li>
                    <li>
                        Impersonate another person or log into an account which you are not authorized to access;
                    </li>
                    <li>
                        Use or attempt to use another User’s account without consent and authorization from the use and [name of app];
                    </li>
                    <li>
                        Uses the App in any manner that could interfere with, disrupts, negatively affect or inhibit other
                        users from fully enjoying use of App and the Services or use the App in any manner that could
                        damage, disable, or impair the functioning of the App and the Services, including with the
                        respect to [name of app]’s network or network security;
                    </li>
                    <li>
                        Interfere or attempt to interfere with service or any user, host or network, including by way of
                        introducing a virus, overloading, flooding, crashing, or sending unsolicited e-mails, promotions
                        or advertisements;
                    </li>
                    <li>
                        Reverse engineer, decompiles or disassemble any aspect of the App or do anything that might
                        discover source code or bypass or circumvent measures employed to prevent or limit access to
                        any part of the App; or
                    </li>
                    <li>
                        Develop or use any third-party applications that interact with the App or Services without our
                        prior written consent, including any scripts designed to scrape por extract data from the App.
                    </li>
                    <li>
                        ***YOU CAN INCLUDE AGE RESTRICTION OR SPECIFIC TYPE OF USER***
                    </li>
                </ul>

            </DescStyled>
            <TitleStyled>Right to Terminate Account</TitleStyled>
            <DescStyled>
                If you are in breach of any of these Terms, we reserve the right, in our sole discretion, without need of
                prior demand, to terminate your right to access or use of the App. We are not responsible for any loss,
                damage, or harm related to your inability to access or use the App based on such termination. If you or
                [name of app] terminate the Agreements, or if [name of app] suspends your access to the Services, you

                agree that [name of app] shall have no liability or responsibility to you. [name of app] will not refund any
                amount that you have already paid, to the fullest extent permitted under applicable law. Nonetheless,
                you may terminate the Services at any time.
            </DescStyled>
            <TitleStyled>Ownership of Content</TitleStyled>
            <DescStyled>
                We are the owner of the licensee of all intellectual property rights in the application, and in the material
                published on it. Those works are protected by copyright laws and treaties around the world. All such
                rights are reserved and will not be waived at any time unless expressly, and in writing, done so by us. In
                accessing the App, you agree that you will access its contents and use the Services solely for your
                personal, non-commercial use. The App, including parts of it, may not be downloaded, copies,
                reproduced, transmitted, stored, sold or distributed without the prior written consent of the copyright
                holder. This excludes downloading, copying and/or printing of pages of the App for personal, non-
                commercial home use only.
            </DescStyled>
            <TitleStyled>Right to User Generated Content</TitleStyled>
            <DescStyled>
                [name of app] does not claim ownership of any Content you post, upload or submit to any publicly
                accessible area of the Services. However, by doing so, you are granting us a worldwide, royalty-free, sub-
                licensable, non-exclusive license to copy, distribute, transmit, reproduce, publicly display, edit, translate
                or publish such Content on the App. This license shall be terminated when such Content is deleted from
                the Platform by either party. With your permission, we may also use your Content in other types of
                media, including social media platforms, for promotional purposes.
            </DescStyled>
            <TitleStyled>Payment Methods</TitleStyled>
            <DescStyled>
                [name of app] accepts a variety of payment methods, as reflected in the purchase tool. Before you can
                submit your order to buy the App, you may be required to provide a valid payment card number and
                associated information for a payment card that you are authorized to use, including any or all of the
                following: (1) your name as it appears on the card; (2) the credit or debit card type; (3) the card’s
                expiration date; (4) any activation number or codes needed to charge you; and (5) the billing address or
                zip code or postal code associated with the card. You authorize [name of app] and our payment
                processor, or you in-app purchasing provider, as applicable, to use information you submit to charge
                your card or other payment method for the price of your purchase. In addition to any taxes, fees and
                charges as may be needed and described, you will be charged for any purchase (a) at our convenience,
                including as early as at the time the order is submitted; or (b) for in-app submissions, after we have
                approved the purchase and you have confirmed your payment in the App. In the event the charge does
                not go through, you may be able to re-submit a payment method.
                For automatically renewing your subscription to the App or any other Service you have purchased, we
                will charge your payment method before the renewal time unless the subscription or service is cancelled
                or you decline to renew the subscription or service.
                Your payment will be processed before the App runs. If you are paying by payment card, we or our third-
                party payment processor may run one or more payment card authorization checks on your card before
                then. You authorize us or our third-party payment processor to store your payment card information
                and, if needed, to continue billing your card until the App run time has expired to avoid interruptions. In
                any case, if you cancel your payment or Paid Subscription or Service and/or terminate any of the

                Services before the end of the current subscription period, we will not be liable for any refund of any
                subscription fees already paid to us.
            </DescStyled>
            <TitleStyled>Right to Update or Modify Terms</TitleStyled>
            <DescStyled>
                We may make changes to these Terms from time to time. If we make changes, we will post the
                amended Terms within the App. Unless we say otherwise in our notice, the amended Terms will be
                effective immediately and your continued access to and use of the App after we provide notice will
                confirm your acceptance of the changes. If you do not agree to the amended Terms, you must stop
                accessing the using the App.
            </DescStyled>
            <TitleStyled>Warranty and Disclaimer</TitleStyled>
            <DescStyled>
                We endeavor to provide the best service we can, but you understand and agree that [name of app] is
                provided “AS IS” without any express or implied warrant or condition of any kind. You use [name of app]
                at your own risk to the fullest extent permitted by applicable law. The App and its owners make no
                representations and disclaim any warranties or conditions of satisfactory quality, merchantability,
                safety, fitness for a particular purpose, or non-infringement. We likewise do not warrant that the App is
                free of malware or any harmful components. We likewise make no representation nor do we warrant,
                endorse, guarantee, or assume responsibility for any third-party applications, user content, or any other
                product or service advertised or offered by a third party on or through our Services or any hyperlinked
                website.

                You understand, acknowledge and agree that [name of app] is not responsible or liable for any
                transaction between you and third party providers of food services. You likewise understand,
                acknowledge and agree that [name of app] is not responsible or liable for any food-bourne illnesses,
                diseases, discomforts, or any medical situation or emergency with any service or product you purchase
                through [name of app]. You should use your judgment and exercise caution where appropriate. No
                advice or information, whether oral or in writing obtained by you from [name of app], shall create any
                warranty on behalf of [name of app].
            </DescStyled>
            <TitleStyled>Limitation of Liability</TitleStyled>
            <DescStyled>
                [name of app] and our affiliates, directors, officers, stockholders, employees, licensors, suppliers and
                agents will not be liable for any indirect, incidental, special, consequential, punitive, or multiple
                damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data,
                use, goodwill or other intangible losses, resulting from: (a) your use of the Services or inability to use the
                Services; (b) your access to or inability to access the Services; (c) the conduct or content of other users
                or third parties on or through the Services; or (d) unauthorized access, use or alteration of your content.
            </DescStyled>
            <TitleStyled>Governing Law</TitleStyled>
            <DescStyled>
                The Agreement (and any non-contractual disputes/claims arising out of or in connection with them) are
                subject to the laws of the Republic of the Philippines.
            </DescStyled>
            <TitleStyled>Privacy Policy</TitleStyled>
            <DescStyled>

                Your privacy is important to us. By using our services, you agree that [name of app] can collect, use and
                share your information consistent with that policy.
            </DescStyled>
        </AgreementSectionStyled>
    )
}
