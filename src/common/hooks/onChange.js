import { useState } from 'react';

const useOnChange = (initialState) => {
  const [value, setValue] = useState(initialState);

  const onClear = () => setValue('');
  const onChange = ({ target = {} } = {}) => setValue(target.value);

  return [value, onChange, onClear];
};

export default useOnChange;
