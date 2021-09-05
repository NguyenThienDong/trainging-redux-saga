import { createTheme } from "@material-ui/core";

const theme = createTheme({
    color: {
        primary: '#D32F2F',
        secondary: '#00BCD4'
    },
    typography: {
        color: '#FFFFFF',
        fontFamily: 'roboto'
    },
    shape: {
        borderRadius: 4,
        margin: 10,
        padding: 20
    }
})

export default theme;