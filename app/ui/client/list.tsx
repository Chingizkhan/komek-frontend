import styles from "./client.module.css"
import {Client} from "@/app/domain/domain";
import Item from "@/app/ui/client/item";
import Link from "next/link";

export const clients: Client[] = [
    {
        id: '0',
        name: 'Талас',
        email: 'talas@mail.ru',
        phone: '87058113795',
        image_url: ''
    },
    {
        id: '1',
        name: 'Маха',
        email: 'maxa@mail.ru',
        phone: '87058113795',
        image_url: ''
    },
    {
        id: '2',
        name: 'Некит',
        email: 'nekit@mail.ru',
        phone: '87058113795',
        image_url: ''
    }
]

async function fetchClients() : Promise<Client[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return new Promise(resolve => resolve(clients))
}

export default async function ClientList() {
    const clients = await fetchClients();

    return (
        <ul className={styles.Client_list}>
            {clients.map((client: Client) => (
                <li key={client.id}>
                    <Link href={"/client/" + client.id}>
                        <Item client={client} />
                    </Link>
                </li>
            ))}
        </ul>
    )
}
