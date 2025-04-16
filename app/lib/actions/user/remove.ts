'use server'

import {fetchAuth} from "@/app/lib/actions/auth/auth";
import {HTTP_DELETE, USER_URL} from "@/app/lib/actions/const/constants";

export async function removeHandler() {
    const { data, ok } = await fetchAuth({
        url: USER_URL+'/delete',
        method: HTTP_DELETE
    })
    console.log('data:', data)
    console.log('ok:', ok)
}