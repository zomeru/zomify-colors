import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';
import seedColors from './configs/seedColors';
import { generatePalette } from './helpers/colorHelpers';
import './App.css';

const App = () => {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  useEffect(() => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  }, [palettes]);

  const findPalette = id => {
    return palettes.find(palette => palette.id === id);
    // return this.state.palettes.find(palette => palette.id === id);
  };

  const deletePalette = id => {
    setPalettes(palettes.filter(palette => palette.id === id));
  };

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  // const syncLocalStorage = () => {
  //   window.localStorage.setItem(
  //     'palettes',
  //     JSON.stringify(this.state.palettes)
  //   );
  // };

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path='/palette/new'
                render={routeProps => (
                  <div>
                    <NewPaletteForm
                      savePalette={savePalette}
                      palettes={palettes}
                      {...routeProps}
                    />
                  </div>
                )}
              />
              <Route
                path='/palette/:paletteId/:colorId'
                render={routeProps => (
                  <div>
                    <SingleColorPalette
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(
                        findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path='/'
                render={routeProps => (
                  <div>
                    <PaletteList
                      palettes={palettes}
                      deletePalette={deletePalette}
                      {...routeProps}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path='/palette/:id'
                render={routeProps => (
                  <div>
                    <Palette
                      palette={generatePalette(
                        findPalette(routeProps.match.params.id)
                      )}
                    />
                  </div>
                )}
              />
              <Route
                render={routeProps => (
                  <div>
                    <PaletteList
                      palettes={palettes}
                      deletePalette={deletePalette}
                      {...routeProps}
                    />
                  </div>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default App;
