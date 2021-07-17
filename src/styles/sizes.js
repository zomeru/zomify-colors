// eslint-disable-next-line import/no-anonymous-default-export
const sizes = {
  up(size) {
    const bp = {
      max: '1920px',
    };
    return `@media only screen and (min-width: ${bp[size]})`;
  },
  down(size) {
    const bp = {
      xs: '575.98px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199.98px',
      xl: '1400px',
    };

    return `@media only screen and (max-width: ${bp[size]})`;
  },
};

export default sizes;
