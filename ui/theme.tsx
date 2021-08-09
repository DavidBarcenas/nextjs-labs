import {createTheme} from '@material-ui/core/styles'
import { grey, common, lightGreen } from '@material-ui/core/colors'

const muiTheme = createTheme()

const fontSerif = `'Cormorant Garamond', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;`

export const theme = createTheme({
    palette: {
      primary: {
        main: grey['900'],
        dark: common.black,
        light: grey['700'],
      },
      secondary: {
        main: lightGreen['300'],
        dark: '#e1ffb1',
        light: '#7da453',
      },
    },
    shape: {
      borderRadius: 2,
    },
    typography: {
      fontFamily: 'serif', 
      h1: {
        fontFamily: fontSerif,
        fontSize: '3.75rem',
      },
      h2: {
        fontFamily: fontSerif,
        fontSize: '3rem',
      },
      h3: {
        fontFamily: fontSerif,
        fontSize: '2.25rem',
        lineHeight: '2.5rem',
      },
      h4: {
        fontFamily: fontSerif,
        fontSize: '1.875rem',
        lineHeight: '2.25rem',
      },
      h5: {
        fontFamily: fontSerif,
        fontSize: '1.5rem;',
        lineHeight: '2rem',
      },
      h6: {
        fontFamily: fontSerif,
      },
    },
  })
  