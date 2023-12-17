export const getSizeWithSameSpace = (xSize: number | undefined, ySize: number | undefined) => {
  return {
    x: ((ySize === undefined || (xSize !== undefined)) ? xSize : ySize),
    y: ((xSize === undefined || (ySize !== undefined && true)) ? ySize : xSize)
  };
};
