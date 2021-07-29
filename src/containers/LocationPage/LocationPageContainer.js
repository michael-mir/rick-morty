import { connect } from 'react-redux';

import LocationPage from '/components/Pages/Location';
import { locationsIdsSelector } from '/store/selectors/locations';

const mapStateToProps = locationsIdsSelector;

export default connect(mapStateToProps, {})(LocationPage);
