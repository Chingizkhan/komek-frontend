export function setTokens(cookie, data: {access_token: string, refresh_token: string}) {
    cookie.set("Access-Token", data.access_token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60*60
    })
    cookie.set("Refresh-Token", data.refresh_token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60*60*24
    })
}