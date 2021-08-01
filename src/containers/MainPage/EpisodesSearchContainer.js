import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EpisodesSearch from '/components/Pages/Main/Filters/Search';
import { getEpisodesData } from '/store/actions/episodes';

const mapDispatchToProps = {
  onSearch: getEpisodesData,
};

export default withRouter(connect(null, mapDispatchToProps)(EpisodesSearch));
