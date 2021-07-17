// eslint-disable-next-line import/no-anonymous-default-export
const sizes = {
  down(size) {
    const bp = {
      xs: '575.98px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199.98px',
    };

    return `@media only screen and (max-width: ${bp[size]})`;
  },
};

export default sizes;
