# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

## Типы данных

interface IAppState - Приложение

```
    catalog: IProduct[];
    preview: string | null;
    delivery: IDeliveryForm | null;
    basket: IProduct[];
    contact: IContactForm| null;
    order: IOrder| null;
```

interface IActions - Пользовательские действия

```
    onClick: (event: MouseEvent) => void; 
```

interface ISuccessActions - Успешное действие

```
    onClick: ()  => void;
```

interface IDeliveryForm - Информация о доставке товара

```
    payment: string;
    address: string;
```

interface IContactForm  - Информация о покупателе

```
    email: string;
    phone: string;
```

interface IOrder extends IDeliveryForm, IContactForm - Информация о заказе

```
    total: number;
	items: string[];
```

interface IOrderResult - Ответ от сервера о заказе

```
    id: string;
	total: number;
```

interface IPage - главная страница

```
    counter: number;
	catalog: HTMLElement[];
```

interface ICardItem - Информация о товарах

```
    id: string;
	title: string;
	price: number | null;
    image: string;
	description: string;
	category: string;
```

interface ICard extends IProduct - Отображение карточки товара

```
    index?: string;
	buttonTitle?: string;
```

interface IModalData - Товар в модальном окне 

```
    content: HTMLElement;
```

interface IFormState - Форма

```
    valid: boolean;
	errors: string[];
```

interface IBasketView - Отображение корзины товаров

```
    items: HTMLElement[];
	total: number;
```

interface ISuccess - Отображения успешного заказа

```
    total: number; // Общая стоимость заказа
```

interface IFormState - Состояние формы

```
    valid: boolean;
	errors: string[];
``

Ошибка формы

```
export type FormErrors = Partial<Record<keyof IOrder, string>>;
```