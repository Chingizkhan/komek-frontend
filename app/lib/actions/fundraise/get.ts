'use server'

import {FUNDRAISE_URL, HTTP_GET} from "@/app/lib/actions/const/constants";
import {createHeaders} from "@/app/lib/actions/util";

export async function getFundraise(clientID: string) {
    try {
        const response = await fetch(`${FUNDRAISE_URL}/${clientID}`,{
            headers: createHeaders(),
            method: HTTP_GET
        })
        const data = await response.json()
        console.log('data:', data)
        if (!response.ok) {
            return { error: new Error(data.error) }
        }

        return { data, success: true }
    } catch (e) {
        return { error: e }
    }
}