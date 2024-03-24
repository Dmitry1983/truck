export const getUniqueValues = (arr = []) => {
  return [...new Set(arr)];
};

export type TElement = string | number | undefined;

export const removeElement = (arr = [], element: TElement) => {
  if (!element) {
    return arr;
  }
  const array = [...arr];
  const index = array.indexOf(element);

  if (index > -1) {
    array.splice(index, 1);
    return array;
  }
  return array;
};

export const addElement = (arr = [], element: TElement) => {
  if (!element) {
    return arr;
  }
  const array = [...arr];
  array.push(element);
  return getUniqueValues(array);
};

export const searchElement = (arr = [], element: TElement) => {
  if (!element) {
    return false;
  }
  const array = [...arr];

  const index = array.indexOf(element);
  if (index > -1) {
    return true;
  }
  return false;
};

export const switchElement = (arr = [], element: TElement) => {
  if (!element) {
    return arr;
  }

  const array = [...arr];
  const index = array.indexOf(element);

  if (index > -1) {
    array.splice(index, 1);
    return array;
  } else {
    array.push(element);
    return array;
  }
};
