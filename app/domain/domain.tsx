import { ROLE_USER, ROLE_ADMIN, ROLE_MERCHANT } from "@/app/consts/links";

export type Role = typeof ROLE_USER | typeof ROLE_ADMIN | typeof ROLE_MERCHANT;

export type Client = {
    id: string;
    name: string;
    phone: string;
    email: string;
    image_url: string;
}

export type User = {
    id: string;
    email: string;
    name: string;
    phone: string;
    login: string;
    image_url: string;
    roles: Role[];
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