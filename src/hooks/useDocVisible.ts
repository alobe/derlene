import { useEvent } from 'react-use';

const key = 'visibilitychange', T = document;
export default (fn: (visilble: boolean) => void) => useEvent(key, () => fn(T.visibilityState === 'visible'), T);
