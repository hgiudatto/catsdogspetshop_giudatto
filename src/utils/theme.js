/* import { createMuiTheme } from '@material-ui/core'; */
import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#edff21', // 005784 claro | 003049 oscuro | edff21 amarilloazufre
        },
        secondary: {
            main: '#d62828',
        },
        type: 'dark',
    },
});

export default theme;
