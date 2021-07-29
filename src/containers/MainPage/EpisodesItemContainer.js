import { connect } from 'react-redux';

import EpisodesItem from '/components/Pages/Main/List/Item';
import { episodeByIdSelector } from '/store/selectors/episodes';

const mapStateToProps = episodeByIdSelector;

export default connect(mapStateToProps)(EpisodesItem);
