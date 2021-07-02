import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.alternate.main,
  },
  inner: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 8),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 8),
    },
  },
  innerNarrowed: {
    maxWidth: 800,
  },
}));

export default useStyles;