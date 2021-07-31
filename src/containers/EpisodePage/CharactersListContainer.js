import { connect } from 'react-redux';

import CharactersList from '/components/Pages/Episode/CharactersList';
import { processingStatusSelector } from '/store/selectors/characters';

const mapStateToProps = (state) => ({
  isProcessing: processingStatusSelector(state),
});

export default connect(mapStateToProps, {})(CharactersList);
