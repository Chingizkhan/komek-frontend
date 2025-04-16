'use server'

import {fetchAuth} from "@/app/lib/actions/auth/auth";
import {HTTP_POST, OPERATION_URL} from "@/app/lib/actions/const/constants";
import {createHeaders} from "@/app/lib/actions/util";

export async function donate(toAccountID: string, amount: number, fundraiseID: string) {
    const { data, ok } = await fetchAuth({
        url: OPERATION_URL+'/donate',
        method: HTTP_POST,
        body: {
            to_account_id: toAccountID,
            amount: amount,
            fundraise_id: fundraiseID,
        },
        headers: createHeaders()
    })

    return {ok, data}
}