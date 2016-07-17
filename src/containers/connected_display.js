import { connect } from 'react-redux';
import { Display } from '../components/display';
import { updateLife } from '../actions';

const mapStateToProps = (state) => ({
  lifeTotals: state.lifeTotals,
});

const mapDispatchToProps = (dispatch) => ({
  onLifeTotalChange: (player, amount) => dispatch(updateLife(player, amount)),
});

export const ConnectedDisplay = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Display);
