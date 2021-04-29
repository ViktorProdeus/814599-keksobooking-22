import {getRandomFloatNumber, getRandomNumber, getRandomArrayEl, cutElementsOfArray} from './util.js';

// data.js
const OFFER_COUNT = 10;
const OFFER_TITLE = [
  'Уютное гнездышко для молодоженов',
  'Маленькая квартирка рядом с парком',
  'Небольшая лавочка в парке',
  'Императорский дворец в центре Токио',
  'Милейший чердачок',
  'Хостел «Для друзей»',
  'Чёткая хата',
  'Стандартная квартира в центре',
  'Тихая квартирка недалеко от метро',
  'Милое гнездышко для фанатов Анимэ',
];
const OFFER_TYPE = ['palace', 'flat', 'house', 'bungalow'];
const OFFER_TIME = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OFFER_DESCRIPTION = [
  'Великолепный таун-хауз в центре Токио. Подходит как туристам, так и бизнесменам. Дом полностью укомплектован и имеет свежий ремонт.',
  'Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.',
  'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
  'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
  'Маленькая квартирка на чердаке. Для самых не требовательных.',
  'Один из лучших хостелов для душевного общения. Ужинаем вместе и играем в «Мафию» по вечерам, вкусно готовим. Ежедневная уборка, бесплатный Wi-Fi, чистое постельное белье.',
  'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
  'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.',
  'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
  'Хейтеров просьба не беспокоить.',
];

const OFFER_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const createDataObj = () => {
  const locationX = getRandomFloatNumber(35.65, 35.7);
  const locationY = getRandomFloatNumber(139.7, 139.8);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1, 8)}.png`,
    },

    offer: {
      title: getRandomArrayEl(OFFER_TITLE),
      address: `${locationX}, ${locationY}`,
      price: `${getRandomNumber(500, 100000)}$`,
      type: getRandomArrayEl(OFFER_TYPE),
      rooms: getRandomNumber(1, 100),
      guests: getRandomNumber(1, 100),
      checkin: getRandomArrayEl(OFFER_TIME),
      checkout: getRandomArrayEl(OFFER_TIME),
      features: cutElementsOfArray(OFFER_FEATURES, getRandomNumber(1, OFFER_FEATURES.length - 1)),
      description: getRandomArrayEl(OFFER_DESCRIPTION),
      photos: cutElementsOfArray(OFFER_PHOTOS, getRandomNumber(1, OFFER_PHOTOS.length - 1)),
    },

    location: {
      x: locationX,
      y: locationY,
    },
  };
};

// data array setup
const rentalOffers = new Array(OFFER_COUNT).fill('element').map(() => createDataObj());

export {rentalOffers};
