import { ROLE_USER, ROLE_ADMIN, ROLE_MERCHANT } from "@/app/consts/links";

export type Role = typeof ROLE_USER | typeof ROLE_ADMIN | typeof ROLE_MERCHANT;

export type Person = {
    id: string;
    name: string;
    phone: string;
    email: string;
    age: number;
    city: string;
    goal: number;
    collected: number;
    address: string;
    helpers: string[];
    description: string;
    circumstances: string;
    image: string;
    categories: string[];
}

export type Fundraise = {
    id: string;
    name: string;
    image_url: string;
    city: string;
    categories: string[]
    goal: number;
    collected: number;
    description: string;
    supporters_quantity: number;
    account_id: string;
}

export type Client = {
    id: string;
    name: string;
    phone: string;
    email: string;
    image_url: string;
}

export type Account = {
    id: string
    balance: number
    country: string
    currency: string
}

export type User = {
    id: string;
    email: string;
    name: string;
    phone: string;
    login: string;
    image_url: string;
    email_verified: boolean
    roles: Role[];
    account: Account
}

export type Merchant = {
    id: string;
    name: string;
    logo: string;
    contact_info: MerchantContactInfo;
}

export type MerchantContactInfo = {
    phone: string;
    email: string;
}

export type Campaign = {
    id: string;
    name: string;
}