import sizes from './sizes';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  colors: {
    height: '90%',
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    opacity: '1',
    backgroundColor: 'black',

    '& a': {
      color: 'white',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-30px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      textDecoration: 'none',
      cursor: 'pointer',
      padding: '2px 5px',
    },

    [sizes.down('lg')]: {
      width: '25%',
      height: '33.3333%',
    },

    [sizes.down('md')]: {
      width: '50%',
      height: '20%',
    },

    [sizes.down('xs')]: {
      width: '100%',
      height: '10%',
    },
  },
}));

export default useStyles;
