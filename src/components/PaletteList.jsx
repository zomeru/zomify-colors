import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import styles from '../styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Zomerify Colors</h1>
            <div className={classes.createButton}>
              <Link to='/palette/new'>Create New Palette</Link>
            </div>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <Link
                to={`/palette/${palette.id}`}
                style={{ textDecoration: 'none' }}
              >
                <MiniPalette
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
