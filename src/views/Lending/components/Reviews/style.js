import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    textWhite: {
        color: 'white',
    },
    swiperContainer: {
        position: 'relative',
    },
    swiperNav: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 120,
        float: 'right',
        '& .swiper-button-prev, & .swiper-button-next': {
            width: theme.spacing(6),
            height: theme.spacing(6),
            padding: theme.spacing(3),
            background: theme.palette.background.paper,
            borderRadius: '100%',
            position: 'relative',
            boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
            border: `2px solid ${theme.palette.background.paper}`,
            '&:after': {
                fontSize: 'initial',
                color: theme.palette.text.primary,
            },
        },
        '& .swiper-button-prev': {
            left: 0,
        },
        '& .swiper-button-next': {
            right: 0,
        },
    },
}));

export default useStyles