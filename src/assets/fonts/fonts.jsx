import { createGlobalStyle } from 'styled-components';

import GothamPro_Bold_woff from './GothamPro-Bold.woff';
import GothamPro_Bold_woff2 from './GothamPro-Bold.woff2';
import GothamPro_Light_woff from './GothamPro-Light.woff';
import GothamPro_Light_woff2 from './GothamPro-Light.woff2';
import Verdana_Bold_woff from './Verdana-Bold.woff';
import Verdana_Bold_woff2 from './Verdana-Bold.woff2';
import Verdana_woff from './Verdana.woff';
import Verdana_woff2 from './Verdana.woff2';

export default createGlobalStyle`
    /* GothamPro_Bold */
    @font-face {
        font-family: 'GothamPro-700';
        font-style: normal;
        font-weight: 700;
        src: local(''), local(''),
            url(${GothamPro_Bold_woff}) format('woff'),
            url(${GothamPro_Bold_woff2}) format('woff2');
    }
    /* GothamPro_Light */
    @font-face {
        font-family: 'GothamPro-light';
        font-style: normal;
        font-weight: 300;
        src: local(''), local(''),
            url(${GothamPro_Light_woff}) format('woff'),
            url(${GothamPro_Light_woff2}) format('woff2');
    }
    /* Verdana_Bold */
    @font-face {
        font-family: 'Verdana-700';
        font-style: normal;
        font-weight: 700;
        src: local(''), local(''),
            url(${Verdana_Bold_woff}) format('woff'),
            url(${Verdana_Bold_woff2}) format('woff2');
    }
    /* Verdana */
    @font-face {
        font-family: 'Verdana-400';
        font-style: normal;
        font-weight: 400;
        src: local(''), local(''),
            url(${Verdana_woff}) format('woff'),
            url(${Verdana_woff2}) format('woff2');
    }
`;