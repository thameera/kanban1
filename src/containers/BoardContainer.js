import { connect } from 'react-redux';
import Board from '../components/Board';

const mapStateToProps = (state) => ({
  cards: state.cards
});

const mapDispatchToProps = {
};

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardContainer;