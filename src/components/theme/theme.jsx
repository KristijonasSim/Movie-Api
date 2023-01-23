import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: 'none',
        },
        '&:after': {
          borderBottom: `2px solid red`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid red`,
        },
      },
    },
  },
});

export default Theme




