import { UserReview } from './interfaces';

export const eRevisionValues = {
  kit: 'kit',
};

export const appName = 'E-revision';

export const logoImgSrc = 'assets/svg/logo.svg';

export const headerLinks = [
  {
    text: 'О приложении',
    code: 'about',
  },
  {
    text: 'Как это работает',
    code: 'how-it-works',
  },
  {
    text: 'Преимущества',
    code: 'advantages',
  },
  {
    text: 'Отзывы',
    code: 'reviews',
  },
];

export const mainTexts = {
  demoText1: 'Ускорьте и упростите ревизию с E-Revision!',
  demoText2: 'Новый подход к инвентаризации',
  demoTextBtn: 'Демо версия',
  aboutApp: 'О ПРИЛОЖЕНИИ',
  aboutAppText:
    'E-Revision - это мобильное приложение, созданное для эффективной и быстрой инвентаризации товаров в магазинах. Идеально подходит для предпринимателей всех масштабов, включая владельцев магазинов Fix Price по франшизе. Приложение обеспечивает надежный контроль и управление товарными остатками, позволяя вам сосредоточиться на развитии вашего бизнеса.',
  advantages: 'Преимущества',
  advantagesText: 'Почему наше приложение - идеальный выбор',
};

export const numberTexts = [
  {
    num: 'x3',
    description: 'Ускоряет ревизию товаров',
  },
  {
    num: '70%',
    description: 'Снижает ошибки инвентаризации',
  },
  {
    num: '24/7',
    description: 'Доступ к данным в реальном времени',
  },
];

export const whyTexts = [
  {
    img: 'assets/svg/alarm.svg',
    description: 'Скорость и точность проведения ревизии',
  },
  {
    img: 'assets/svg/phone.svg',
    description: 'Удобство использования и интуитивно понятный интерфейс',
  },
  {
    img: 'assets/svg/check.svg',
    description:
      'Гибкая адаптация. Адаптируем E-Revision под любой формат файла по запросу.',
  },
  {
    img: 'assets/svg/money.svg',
    description: 'Экономия времени и ресурсов предпринимателей',
  },
];

export const demoMobileImgSrc = 'assets/svg/demo-mobile.png';

export const footerTexts = {
  demoVersion: 'Демо-версия',
  tryOurProductToday: 'Попробуйте наш продукт уже сегодня!',
  fillOutTheContactForm:
    'Заполните контактную форму, чтобы получить доступ к демо-версии продукта. Не упустите возможность улучшить свой бизнес!',
  privacyPolicy: 'Я соглашаюсь с условиями политики конфиденциальности',
  getAccess: 'Получить доступ',
  revisionMail: 'info@e-revision.ru',
  rights: '© 2023 E-Revision. Все права защищены.',
};

export const howItWorksArray = [
  {
    img: 'assets/svg/how-it-works_1.png',
    title:
      'Выбор магазина из списка заранее заведенных магазинов для проведения ревизии',
  },
  {
    img: 'assets/svg/how-it-works_2.png',
    title:
      'Загрузка файла с бухгалтерским остатком товаров для сравнения с реальными данными.',
  },
  {
    img: 'assets/svg/how-it-works_3.png',
    title:
      'Ревизия товаров с помощью камеры телефона или ввода штрихкода и локального кода вручную.',
  },
  {
    img: 'assets/svg/how-it-works_5.png',
    title: 'Ввод количества отсканированного товара.',
    // title:
    //   'Отслеживание истории сканирования товаров с информацией о времени, количестве и ответственном сотруднике.',
  },
  {
    img: 'assets/svg/how-it-works_4.png',
    title:
      'Поиск и фильтрация по отсканированным товарам для быстрой оценки текущих запасов.',
  },
  {
    img: 'assets/svg/how-it-works_6.png',
    title:
      'Получение файла с результатами ревизии, готового к выгрузке в 1С для дальнейшей работы с данными.',
  },
];

export const advantagesTexts = {
  head: 'Попробуйте сейчас',
  title: 'Оцените преимущества на практике',
  subtitle:
    'Попробуйте демо-версию нашего приложения и убедитесь, насколько легко и быстро можно проводить инвентаризацию в магазине',
  buttonText: 'Демо версия',
};

export const advantagesMobileImgSrc = 'assets/svg/advantages-phone.png';

export const reviewsTexts = {
  head: 'ОТЗЫВЫ',
  title: 'Что говорят о продукте клиенты',
};

export const userReviewsArray: UserReview[] = [
  {
    userLogo: 'assets/svg/user-logo_1.svg',
    userName: 'Иван Федоров',
    userPosition: 'Владелец магазина Fix Price в г. Коряжма',
    reviewText:
      'Никогда не думал, что инвентаризация может быть такой легкой! С помощью этого приложения я смог провести ее в нашем магазине всего за несколько часов.',
  },
  {
    userLogo: 'assets/svg/user-logo_2.svg',
    userName: 'Василий Иванов',
    userPosition: 'Владелец магазина Fix Price в г. Москва',
    reviewText:
      'Я просто в восторге от этого приложения! Оно позволяет провести инвентаризацию магазина быстро и точно, что дает мне больше времени для других задач.',
  },
  {
    userLogo: 'assets/svg/user-logo_3.svg',
    userName: 'Мария Кузнецова',
    userPosition: 'Владелец магазина Fix Price в г. Санкт-Петербург',
    reviewText:
      'Супер-удобное приложение! Оно существенно ускорило процесс инвентаризации и сделало его гораздо менее трудоемким. ',
  },
];

export const successModal = {
  img: 'assets/svg/success.svg',
  title: 'Спасибо за вашу заявку!',
  text: 'Мы получили вашу заявку на демо-версию нашего продукта. Наш менеджер свяжется с вами в ближайшее время',
};
