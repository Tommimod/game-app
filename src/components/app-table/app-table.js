import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const AppTable = ({ data, classes }) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Название</TableCell>
          <TableCell>ОС</TableCell>
          <TableCell>RAM</TableCell>
          <TableCell>ROM</TableCell>
          <TableCell>CPU</TableCell>
          <TableCell>GPU</TableCell>
          <TableCell>Рейтинг</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell>{row.os}</TableCell>
            <TableCell>{row.ram}</TableCell>
            <TableCell>{row.rom}</TableCell>
            <TableCell>{row.cpu}</TableCell>
            <TableCell>{row.gpu}</TableCell>
            <TableCell>{row.rating}</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>

);

AppTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    ram: PropTypes.number,
    rom: PropTypes.number,
    cpu: PropTypes.number,
    gpu: PropTypes.number,
    rating: PropTypes.number,
  })).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    table: PropTypes.string,
  }).isRequired,
};


export default withStyles(styles)(AppTable);
