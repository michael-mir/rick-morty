import { schema } from 'normalizr';

const charactersSchema = new schema.Entity('characters', {}, { idAttribute: 'id' });

export default charactersSchema;
