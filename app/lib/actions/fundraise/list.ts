'use server'

import {FUNDRAISE_URL, HTTP_GET} from "@/app/lib/actions/const/constants";
import {createHeaders} from "@/app/lib/actions/util";

export async function listFundraise() {
    try {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(1)
            }, 1000)
        })
        const response = await fetch(FUNDRAISE_URL,{
            headers: createHeaders(),
            method: HTTP_GET
        })
        const data = await response.json()
        if (!response.ok) {
            return { error: new Error(data.error) }
        }

        return { data, success: true }
    } catch (e) {
        return { error: e }
    }
}
