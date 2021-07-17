import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../configs/constants';

const useStyles = makeStyles(theme => ({
  root: { display: 'flex' },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {
    marginRight: '24px',

    '& a': {
      textDecoration: 'none',
    },
  },
  button: {
    margin: '0 0.5rem',

    '& a': {
      textDecoration: 'none',
    },
  },
}));

export default useStyles;
