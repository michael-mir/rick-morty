import { schema } from 'normalizr';

const locationsSchema = new schema.Entity('locations', {}, { idAttribute: 'id' });

export default locationsSchema;
