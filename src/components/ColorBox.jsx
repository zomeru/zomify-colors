import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/ColorBoxStyles';

const ColorBox = ({
  name,
  background,
  moreUrl,
  showingFullPalette,
  classes,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const changeCopyState = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className={classes.ColorBox}>
        <div
          style={{ background }}
          className={`${classes.copyOverlay} ${isCopied && 'show'}`}
        />
        {/* {clsx(classes.copyOverlay, { [classes.showOverlay]: copied })} */}
        <div className={`${classes.copyMessage} ${isCopied && 'show'}`}>
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default withStyles(styles)(ColorBox);
