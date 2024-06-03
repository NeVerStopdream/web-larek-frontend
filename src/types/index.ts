
export interface IAppState {
    catalog: IProduct[];
    basket: IProduct[];
    preview: string | null;
    delivery: IDeliveryForm | null; 
    contact: IContactForm| null; 
    order: IOrder| null;
}

export interface IActions {
    onClick: (event: MouseEvent) => void;
}

export interface ISuccessActions {
    onClick: ()  => void;
}

export interface IDeliveryForm  {
    payment: string;
    address: string;
}

export interface IContactForm {
    email: string;
    phone: string;
}

export interface IOrder extends IDeliveryForm, IContactForm {
	total: number;
	items: string[];
}

export interface IOrderResult {
    id: string;
	total: number;
}

export interface IPage  {
    counter: number;
	catalog: HTMLElement[];
}

export interface ICardItem {
	id: string;
	title: string;
	price: number | null;
	description: string;
	category: string;
	image: string;
}

export interface ICard extends IProduct {
	index?: string;
	buttonTitle?: string;
}

export interface IModalData {
	content: HTMLElement;
}

export interface IFormState {
	valid: boolean;
	errors: string[];
}

export interface IBasketView {
	items: HTMLElement[];
	total: number;
}

export interface ISuccess {
	total: number;
}

export interface IFormState {
	valid: boolean;
	errors: string[];
}

export type FormErrors = Partial<Record<keyof IOrder, string>>;