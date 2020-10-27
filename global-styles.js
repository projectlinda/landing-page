import { createGlobalStyle } from 'styled-components'
import { basePath } from './constants'
 
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: SFProRounded;
        font-weight: 200;
        src: url('${basePath}/fonts/SF-Pro-Rounded-Light.otf');
    }


    @font-face {
        font-family: SFProRounded;
        font-weight: normal;
        src: url('${basePath}/fonts/SF-Pro-Rounded-Regular.otf');
    }

    @font-face {
        font-family: SFProRounded;
        font-weight: medium;
        src: url('${basePath}/fonts/SF-Pro-Rounded-Medium.otf');
    }

    @font-face {
        font-family: SFProRounded;
        font-weight: bold;
        src: url('${basePath}/fonts/SF-Pro-Rounded-Bold.otf');
    }

    @font-face {
        font-family: SFProText;
        font-weight: normal;
        src: url('${basePath}/fonts/SF-Pro-Text-Regular.otf');
    }

    @font-face {
        font-family: SFProText;
        font-weight: bold;
        src: url('${basePath}/fonts/SF-Pro-Text-Bold.otf');  
    }

    @font-face {
        font-family: SFProText;
        font-weight: medium;
        src: url('${basePath}/fonts/SF-Pro-Text-Medium.otf');  
    }

    @font-face {
        font-family: SFProText;
        font-weight: 600;
        src: url('${basePath}/fonts/SF-Pro-Text-Semibold.otf');  
    }

    @font-face {
        font-family: SFProText;
        font-weight: 100;
        src: url('${basePath}/fonts/SF-Pro-Text-Thin.otf');  
    }
`
 
export default GlobalStyle