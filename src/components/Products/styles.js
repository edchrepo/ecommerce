
import { createTheme } from '@mui/material/styles';
// import background from '../../assets/background.png'

const theme = createTheme();

const useStyles = {
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundImage: `url(${background})`,
    // backgroundColor: theme.palette.grey.A100,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
};

export default useStyles;