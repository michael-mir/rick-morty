import { connect } from 'react-redux';

import EpisodePage from '/components/Pages/Episode';
import { episodeByIdSelector } from '/store/selectors/episodes';

const mapStateToProps = episodeByIdSelector;

export default connect(mapStateToProps, {})(EpisodePage);
