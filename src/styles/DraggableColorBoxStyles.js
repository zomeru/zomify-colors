import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes';

const useStyles = makeStyles(() => ({
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-6px',

    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)',
    },

    [sizes.down('lg')]: {
      width: '25%',
      height: '20%',
    },

    [sizes.down('md')]: {
      width: '50%',
      height: '10%',
    },

    [sizes.down('sm')]: {
      width: '100%',
      height: '5%',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '90%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'rgba(51, 51, 51, 0.8)',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',

    [sizes.down('xs')]: {
      padding: '0',
      marginLeft: '10px',
    },

    '& svg': {
      [sizes.down('xs')]: {
        fontSize: '1.2rem',
        marginBottom: '3px',
      },
    },
  },
  deleteIcon: {
    marginRight: '-20px',
    //marginTop: '-5px',
    transition: 'all 0.3s ease-in-out',

    // [sizes.down('sm')]: {
    //   transform: 'scale(.7)',
    //   //marginTop: '5px',
    // },
  },
}));

export default useStyles;
