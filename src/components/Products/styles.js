
import { createTheme } from '@mui/material/styles';
// import background from '../../assets/background.png'

const theme = createTheme();

const useStyles = {
  image: {
    width: '100%',
    flexGrow: 1,
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      marginTop: '5%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '15%',
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
};

export default useStyles;