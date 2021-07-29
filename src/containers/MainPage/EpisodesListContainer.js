import { connect } from 'react-redux';

import EpisodesList from '/components/Pages/Main/List';
import { episodesListSelector, processingStatusSelector } from '/store/selectors/episodes';

const mapStateToProps = (state) => ({
  isProcessing: processingStatusSelector(state),
  items: episodesListSelector(state),
});

export default connect(mapStateToProps, {})(EpisodesList);
