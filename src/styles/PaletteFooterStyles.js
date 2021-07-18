import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  PaletteFooter: {
    backgroundColor: 'white',
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold',
  },

  emoji: {
    fontSize: '1rem',
    margin: '0 1rem',
  },
}));

export default useStyles;
