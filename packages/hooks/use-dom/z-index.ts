let globalZIndex = 1998;

export const useGlobalZIndex = () => ++globalZIndex;

export const setGlobalZIndex = (val: number) => {
  globalZIndex = val;
};
