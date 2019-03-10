import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Slider from '@material-ui/lab/Slider';
import {
  Typography, withStyles, FormControl, InputLabel,
  Select, MenuItem, TextField, Switch, FormControlLabel,
} from '@material-ui/core';

import './app-filter.css';

const styles = theme => (
  {
    root: {
      minWidth: '200px',
    },
    slider: {
      touchAction: 'none',
      padding: '22px 0px',
      margin: '0px 10px',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    textField: {
      marginTop: theme.spacing.unit,
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    switch: {
      marginTop: theme.spacing.unit,
    },
  }
);

class AppFilter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = (value, state) => {
      const { handleChange } = this.props;
      handleChange(state, value);
    };
  }

  render() {
    const { classes, filterState } = this.props;
    const {
      rating, ram, rom, cpu, gpu, os, controller,
    } = filterState;

    return (
      <div className="app-filter">
        <div className="slider-group">
          <div>
            <div className={classes.root}>
              <Typography variant="subtitle2" color="textSecondary">
            Рейтинг: { rating }
              </Typography>
              <Slider
                classes={{ container: classes.slider }}
                value={rating}
                min={0}
                max={9}
                step={1}
                onChange={(event, value) => this.handleChange(value, 'rating')}
              />
            </div>
            <div className={classes.root}>
              <Typography variant="subtitle2" color="textSecondary">
            RAM: { ram }
              </Typography>
              <Slider
                classes={{ container: classes.slider }}
                value={ram}
                min={1000}
                max={10000}
                step={1000}
                onChange={(event, value) => this.handleChange(value, 'ram')}
              />
            </div>
            <div className={classes.root}>
              <Typography variant="subtitle2" color="textSecondary">
              ROM: { rom }
              </Typography>
              <Slider
                classes={{ container: classes.slider }}
                value={rom}
                min={1000}
                max={100000}
                step={1000}
                onChange={(event, value) => this.handleChange(value, 'rom')}
              />
            </div>
          </div>
          <div>
            <div className={classes.root}>
              <Typography variant="subtitle2" color="textSecondary">
              CPU(Пункты): { cpu }
              </Typography>
              <Slider
                classes={{ container: classes.slider }}
                value={cpu}
                min={1}
                max={10}
                step={1}
                onChange={(event, value) => this.handleChange(value, 'cpu')}
              />
            </div>
            <div className={classes.root}>
              <Typography inline variant="subtitle2" color="textSecondary">
              GPU (Пункты): { gpu }
              </Typography>
              <Slider
                classes={{ container: classes.slider }}
                value={gpu}
                min={1}
                max={10}
                step={1}
                onChange={(event, value) => this.handleChange(value, 'gpu')}
              />
            </div>
          </div>
        </div>
        <div />
        <div>

          <TextField
            label="Поиск"
            type="search"
            onChange={event => this.handleChange(event.target.value, 'term')}
            className={classes.textField}
          />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="os">OS</InputLabel>
            <Select
              value={os}
              onChange={(event, value) => this.handleChange(value.props.value, 'os')}
              inputProps={{
                id: 'os',
              }}
            >
              <MenuItem value="">
                <em>Любая</em>
              </MenuItem>
              <MenuItem value="Windows">Windows</MenuItem>
              <MenuItem value="Linux">Linux</MenuItem>
              <MenuItem value="MacOS">MacOS</MenuItem>
            </Select>
          </FormControl>
          <div>

            <FormControlLabel
              className={classes.switch}
              control={(
                <Switch
                  checked={controller}
                  onChange={(event, value) => this.handleChange(value, 'controller')}
                  value="controller"
                  color="primary"
                />
                )}
              label="С контроллером"
            />
          </div>
        </div>

      </div>
    );
  }
}

AppFilter.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    slider: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  filterState: PropTypes.shape({
    rating: PropTypes.number,
    ram: PropTypes.number,
    rom: PropTypes.number,
    cpu: PropTypes.number,
    gpu: PropTypes.number,
    os: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(AppFilter);
