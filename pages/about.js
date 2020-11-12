import styled from 'styled-components'
import { basePath, spacing } from '../constants'

const AboutPageStyled = styled.section`
    background-color: ${({ theme }) => theme.lightGrey};    
`

const AboutPageContainerStyled = styled.section`
    margin: auto;
    max-width: 1400px;
    
    padding: ${spacing(3)};
`
const TitleStyled = styled.div`    
    font-size: 3.4vh;
    font-weight: bold;     
    text-align: center;
    
    padding: ${spacing(3)};
    padding-bottom: 0px;   
`

const ItemListStyled = styled.section`        
    align-items: start;
    display: flex;    
    flex-wrap: wrap;
    justify-content: center;

    padding: ${spacing(3)} ${spacing(2)};
`

const ItemStyled = styled.div`    
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 12vh;

    margin: ${spacing(1)};
`

const ItemImageStyled = styled.img`    
    height: 8vh;
    width: 8vh;
`

export default function AboutPage() {
    return (
        <AboutPageStyled id="about">
            <AboutPageContainerStyled>
                <TitleStyled>W/O Carinderya</TitleStyled>
                <ItemListStyled>
                    <ItemStyled>
                        <ItemImageStyled src={`${basePath}/images/high_capital.png`}></ItemImageStyled>
                        <div>High Capital</div>
                    </ItemStyled>
                    <ItemStyled>
                        <ItemImageStyled src={`${basePath}/images/no_marketplace.png`}></ItemImageStyled>
                        <div>No designated market place</div>
                    </ItemStyled>
                    <ItemStyled>
                        <ItemImageStyled src={`${basePath}/images/limited_hours.png`}></ItemImageStyled>
                        <div>Limited Hours of Operation</div>
                    </ItemStyled>
                    <ItemStyled>
                        <ItemImageStyled src={`${basePath}/images/expensive.png`}></ItemImageStyled>
                        <div>Expensive</div>
                    </ItemStyled>
                </ItemListStyled>
                <TitleStyled>With Carinderya</TitleStyled>
                <ItemListStyled>
                    <ItemStyled>
                        <ItemImageStyled src={`${basePath}/images/zero_startup.png`}></ItemImageStyled>
                        <div>Zero Startup Fees</div>
                    </ItemStyled>
                    <ItemStyled>
                        <ItemImageStyled src={`${basePath}/images/marketplace.png`}></ItemImageStyled>
                        <div>1st Marketplace App for Food</div>
                    </ItemStyled>
                    <ItemStyled>
                        <ItemImageStyled src={`${basePath}/images/open_always.png`}></ItemImageStyled>
                        <div>24/7 Operations</div>
                    </ItemStyled>
                    <ItemStyled>
                        <ItemImageStyled src={`${basePath}/images/pig.png`}></ItemImageStyled>
                        <div>Save money</div>
                    </ItemStyled>
                    <ItemStyled>
                        <ItemImageStyled src={`${basePath}/images/home_culture.png`}></ItemImageStyled>
                        <div>Share your home and culture</div>
                    </ItemStyled>
                </ItemListStyled>
            </AboutPageContainerStyled>
        </AboutPageStyled>
    )
}
