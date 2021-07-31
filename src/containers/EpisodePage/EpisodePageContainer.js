import { connect } from 'react-redux';

import EpisodePage from '/components/Pages/Episode';
import { getCharactersList } from '/store/actions/characters';
import { getEpisodeById } from '/store/actions/episodes';
import { episodeByIdSelector, processingStatusSelector } from '/store/selectors/episodes';

const mapStateToProps = (state, ownProps) => ({
  episodeInfo: episodeByIdSelector(state, ownProps),
  isProcessing: processingStatusSelector(state),
});

const mapDispatchToProps = (dispatch, { id }) => ({
  getEpisodeInfo: () => dispatch(getEpisodeById(id)),
  getCharacters: (ids) => dispatch(getCharactersList(ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodePage);
