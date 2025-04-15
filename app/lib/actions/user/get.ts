'use server'

import {fetchAuth} from "@/app/lib/actions/auth/auth";

export async function getUser() {
    try {
        const { data, ok, error } = await fetchAuth({
            url: 'http://localhost:8887/user',
            method: 'GET',
            notUseCache: true
        })
        if (!ok) {
            return error
        }
        return { data }
    } catch (e) {
        return { error: e }
    }
}