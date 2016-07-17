import { connect } from 'react-redux';
import { LifeCounterDisplay } from '../components/display';

const mapStateToProps = (state) => ({
  lifeTotals: state.lifeTotals,
});

const mapDispatchToProps = (dispatch) => ({
});

export const ConnectedLifeCounterDisplay = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LifeCounterDisplay);
