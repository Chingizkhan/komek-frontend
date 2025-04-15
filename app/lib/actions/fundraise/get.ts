'use server'

export async function getFundraise(clientID: string) {
    try {
        const response = await fetch(`http://localhost:8887/fundraise/${clientID}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'
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