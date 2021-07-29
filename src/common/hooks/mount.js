import { useEffect, useRef } from 'react';

const useMount = (action = () => {}, dependencies = []) => {
  const ref = useRef();
  const isInited = ref.current;

  useEffect(() => {
    if (!isInited) {
      action();
    } else {
      ref.current = true;
    }
  }, dependencies);
};

export default useMount;
