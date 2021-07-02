import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  featureCheck: {
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;