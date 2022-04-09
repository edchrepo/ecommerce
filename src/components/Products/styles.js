
import { createTheme } from '@mui/material/styles';


const theme = createTheme();

const useStyles = {
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey.A100,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
};

export default useStyles;