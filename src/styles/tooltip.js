const styles = theme => ({
  lightTooltip: {
    background: '#2a3153',
    color: '#8693c6',
    boxShadow: theme.shadows[1],
    fontSize: 12,
    padding: '7px 20px 7px 16px',
    margin: '0px 22px !important',
  },
  arrowPopper: {
    '&[x-placement*="left"] $arrowArrow': {
      right: 0,
      marginRight: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: 'transparent transparent transparent #2a3153',
      },
    },
    '&[x-placement*="right"] $arrowArrow': {
      left: 0,
      marginLeft: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: 'transparent  #2a3153 transparent transparent',
      },
    },
  },
  arrowArrow: {
    position: 'absolute',
    fontSize: 15,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
});

export default styles;
