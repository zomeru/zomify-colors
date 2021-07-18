import sizes from './sizes';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
  },

  logo: {
    //width: '150px',
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    '& a': {
      textDecoration: 'none',
      color: 'black',
    },

    [sizes.down('sm')]: {
      fontSize: '16px',
    },

    [sizes.down('xs')]: {
      display: 'none',
    },
  },

  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    marginLeft: '1.5rem',

    '& .rc-slider-track': {
      backgroundColor: 'transparent',
    },

    '& .rc-slider-rail': {
      height: '8px',
    },

    '& .rc-slider-handle, .rc-slider-handle:active .rc-slider-handle:focus, .rc-slider-handle:hover':
      {
        backgroundColor: 'green',
        outline: 'none',
        border: '-2px solid green',
        boxShadow: 'none',
        width: '13px',
        height: '13px',
        marginLeft: '-7px',
        marginTop: '-3px',
      },

    [sizes.down('md')]: {
      width: '200px',
    },

    [sizes.down('sm')]: {
      width: '150px',
    },
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
}));

export default useStyles;
