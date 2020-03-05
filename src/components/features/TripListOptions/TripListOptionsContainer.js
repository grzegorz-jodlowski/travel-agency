import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import { getAllFilters, changeSearchPhrase, changeFromDuration, changeToDuration } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeFromDuration: value => dispatch(changeFromDuration(value)),
  changeToDuration: value => dispatch(changeToDuration(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
