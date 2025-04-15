'use server'

import {fetchAuth} from "@/app/lib/actions/auth/auth";

export async function donate(toAccountID, amount, fundraiseID) {
    const { data, ok } = await fetchAuth({
        url: 'http://localhost:8887/operation/donate',
        method: 'POST',
        body: JSON.stringify({
            to_account_id: toAccountID,
            amount: amount,
            fundraise_id: fundraiseID,
        })
    })

    return {ok, data}
}