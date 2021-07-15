/* eslint-disable import/no-anonymous-default-export */
import chroma from 'chroma-js';

const isDarkColor = props =>
  chroma(props.background).luminance() <= 0.15
    ? 'rgb(209, 209, 209)'
    : 'rgb(51, 51, 51)';
const isLightColor = props =>
  chroma(props.background).luminance() >= 0.45
    ? 'rgb(51, 51, 51)'
    : 'rgb(209, 209, 209)';

export default {
  ColorBox: {
    width: '20%',
    height: props => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',

    '&:hover button': {
      opacity: '1',
    },
  },
  colorName: {
    color: isDarkColor,
  },
  boxContent: {
    position: 'absolute',
    width: '90%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  seeMore: {
    color: isLightColor,
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase',
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)',

    '&.show': {
      opacity: '1',
      transform: 'scale(50)',
      zIndex: '10',
      position: 'absolute',
    },
  },
  copyButton: {
    color: isLightColor,
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    textDecoration: 'none',
    opacity: '0',
    cursor: 'pointer',
  },
  copyMsg: {
    color: isDarkColor,
    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',

    '&.show': {
      opacity: '1',
      transform: 'scale(1)',
      zIndex: '25',
      transition: 'all 0.4s ease-in-out',
      transitionDelay: '0.3s',
    },

    '& h1': {
      textShadow: `1px 2px ${isLightColor}`,
      fontWeight: '400',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
    },

    '& p': {
      fontSize: '2rem',
      fontWeight: '100',
      textTransform: 'uppercase',
    },
    copyText: {
      color: isLightColor,
    },
  },
};
