import { useCallback, useState } from 'react';

export default <T = any>(init: T | (() => T)): [T, (s: Partial<T>) => void] => {
  const [state, set] = useState<T>(init);
  return [state, useCallback((s: Partial<T>) => set((S: T) => ({ ...S, ...s })), [set])];
};
