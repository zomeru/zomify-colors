import sizes from './sizes';
import bg from '../assets/Confetti-Doodles.svg';

const styles = {
  '@global': {
    '.fade-exit': {
      opacity: '1',
    },

    '.fade-exit-active': {
      opacity: '0',
      transition: 'opacity 0.5s ease-out',
    },
  },
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#4265cd',
    backgroundImage: `url(${bg})`,
    //backgroundSize: 'cover',
  },
  container: {
    width: '60%',
    height: '80%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginBottom: '3rem',

    [sizes.up('max')]: {
      width: '1150px',
    },
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',

    '& a': {
      color: 'white',
      textDecoration: 'none',
    },
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 32%)',
    gridGap: '1.5rem',

    [sizes.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
    },

    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
    },

    [sizes.up('max')]: {
      gridGap: '2.5rem',
      gridTemplateColumns: 'repeat(3, 30%)',
    },
  },
  createButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: '2px 5px',
    borderRadius: '3px',
    //marginRight: '1.5rem',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      transition: 'all .3s',
    },

    [sizes.up('max')]: {
      marginRight: '2.5rem',
    },

    [sizes.down('lg')]: {
      marginRight: '-1.5rem',
    },

    [sizes.down('xs')]: {
      marginRight: '0.5rem',
    },
  },
};

export default styles;
