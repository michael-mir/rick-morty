import { connect } from 'react-redux';

import RootPage from '/components/Pages/Main';
import { getEpisodesData } from '/store/actions/episodes';

const mapDispatchToProps = {
  getEpisodes: getEpisodesData,
};

export default connect(null, mapDispatchToProps)(RootPage);
