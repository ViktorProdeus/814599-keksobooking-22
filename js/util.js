// util.js
const showError = () =>
  new Error('Задан некорректный диапазон, он может быть только положительный, включая ноль и max > min');

const getRandomNumber = (min, max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    return result;
  } else {
    return showError();
  }
};

const getRandomFloatNumber = (min, max, num = 2) => {
  if (min >= 0 && max > min) {
    const result = Math.random() * (max - min) + min;

    return +result.toFixed(num);
  } else {
    return showError();
  }
};

const getRandomArrayEl = (array) => array[getRandomNumber(0, array.length - 1)];

const cutElementsOfArray = (array, values) => {
  const newArray = [];
  for (let i = 0; i < values; i++) {
    newArray.push(array[i]);
  }

  return newArray;
};

export {getRandomFloatNumber, getRandomNumber, getRandomArrayEl, cutElementsOfArray};
