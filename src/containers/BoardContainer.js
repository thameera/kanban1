import { connect } from 'react-redux';
import Board from '../components/Board';
import { moveCard } from '../actions';

const mapStateToProps = (state) => ({
  cards: state.cards
});

const mapDispatchToProps = {
  moveCard
};

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardContainer;