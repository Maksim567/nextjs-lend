import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    playIcon: {
        width: 40,
        height: 40,
        [theme.breakpoints.up('sm')]: {
            width: 80,
            height: 80,
        },
        [theme.breakpoints.up('md')]: {
            width: 80,
            height: 80,
        },
    },
}));

export default useStyles