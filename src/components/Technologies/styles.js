import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grid: {
      mt: [0, null, -6, null, -4],
      gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
      gridTemplateColumns: [
        'repeat(2,1fr)',
        null,
        'repeat(2,1fr)',
        null,
        'repeat(3,1fr)',
      ],
    },
    card: {
        height: '70%',
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '75%',
        borderRadius: '50%',
        margin: '28px'
    },
    cardContent: {
        flexGrow: 1,
    },
}));

  export default useStyles;