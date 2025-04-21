'use server'

import {fetchAuth} from "@/app/lib/actions/auth/auth";
import {HTTP_GET, ACCOUNT_URL} from "@/app/lib/actions/const/constants";

export async function getDonations() {
    try {
        const { data, ok, error } = await fetchAuth({
            url: `${ACCOUNT_URL}/donations`,
            method: HTTP_GET,
            notUseCache: true
        })
        if (!ok) {
            return { data: [], error: new Error('get donations from server') }
        }
        return { data }
    } catch (e) {
        return { data: [], error: e }
    }
}