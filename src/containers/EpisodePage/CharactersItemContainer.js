import { connect } from 'react-redux';

import CharactersItem from '/components/Pages/Episode/CharactersList/Item';
import { characterByIdSelector } from '/store/selectors/characters';

const mapStateToProps = characterByIdSelector;

export default connect(mapStateToProps, {})(CharactersItem);
