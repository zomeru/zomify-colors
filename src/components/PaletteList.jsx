import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from '../styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes, deletePalette } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Zomify Colors</h1>
            <div className={classes.createButton}>
              <Link to='/palette/new'>Create New Palette</Link>
            </div>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                <Link
                  to={`/palette/${palette.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <MiniPalette
                    {...palette}
                    handleClick={() => this.goToPalette(palette.id)}
                    handleDelete={deletePalette}
                    key={palette.id}
                    id={palette.id}
                  />
                </Link>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
