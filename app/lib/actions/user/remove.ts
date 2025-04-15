'use server'

import {fetchAuth} from "@/app/lib/actions/auth/auth";

export async function removeHandler() {
    const { data, ok } = await fetchAuth({
        url: 'http://localhost:8887/user/delete',
        method: 'DELETE'
    })
    console.log('data:', data)
    console.log('ok:', ok)
}