import { clients } from "@/app/ui/client/list";
import { Client } from "@/app/domain/domain"
import styles from "./client_info.module.css"

export default async function ClientInfo({ id }: { id: string }) {
    const client = await fetchClientInfo(id)

    if (!client) {
        throw new Error("Client not found");
    }

    return (
        <div className={styles.ClientInfo}>
            <h1>{client.name}</h1>
            <p>Почта: {client.email}</p>
            <p>Телефон: {client.phone}</p>
        </div>
    )
}

async function fetchClientInfo(id: string) : Promise<Client | undefined>  {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(clients.find(client => client.id === id))
        }, 700)
    });
}