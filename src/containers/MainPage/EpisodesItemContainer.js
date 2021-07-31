import { connect } from 'react-redux';

import EpisodesItem from '/components/Pages/Main/List/Item';
import { episodeByPositionSelector } from '/store/selectors/episodes';

const mapStateToProps = episodeByPositionSelector;

export default connect(mapStateToProps)(EpisodesItem);
