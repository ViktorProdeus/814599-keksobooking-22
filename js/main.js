// util.js
const showError = () => new Error('Задан некорректный диапазон, он может быть только положительный, включая ноль и max > min');

// eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-unused-vars
const getRandomFloatNumber = (min, max, num) => {
  if (min >= 0 && max > min) {
    min = Math.min(min);
    max = Math.max(max);
    const result = Math.random() * (max - min + 1) + min;

    return result.toFixed(num);
  } else {
    return showError();
  }
};


