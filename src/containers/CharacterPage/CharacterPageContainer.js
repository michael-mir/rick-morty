import { connect } from 'react-redux';

import CharacterPage from '/components/Pages/Character';
import { characterByIdSelector } from '/store/selectors/characters';

const mapStateToProps = characterByIdSelector;

export default connect(mapStateToProps, {})(CharacterPage);
