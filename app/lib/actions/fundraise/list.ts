'use server'

export async function listFundraise() {
    try {
        const response = await fetch('http://localhost:8887/fundraise/',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'
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
