import { useEffect, useRef } from 'react';

const useUnmount = (action = () => { }, dependencies = []) => {
  const ref = useRef(action);
  ref.current = action;

  useEffect(() => () => ref.current(), dependencies);
};

export default useUnmount;
