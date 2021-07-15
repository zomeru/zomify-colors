export default {
  root: {
    backgroundColor: '#25aaa3',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: '70%',
    height: '80%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginBottom: '3rem',
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
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '1.5rem',
  },
  createButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: '2px 5px',
    borderRadius: '3px',
    marginRight: '3rem',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      transition: 'all .3s',
    },
  },
};
