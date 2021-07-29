import { schema } from 'normalizr';

const episodesSchema = new schema.Entity('episodes', {}, { idAttribute: 'id' });

export default episodesSchema;
