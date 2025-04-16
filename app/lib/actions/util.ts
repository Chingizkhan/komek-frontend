export function createHeaders(input?: object): HeadersInit {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...input
    }
}