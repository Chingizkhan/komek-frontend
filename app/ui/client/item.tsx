import styles from "./client.module.css"
import {Client} from "@/app/domain/domain";

export default function ClientItem({ client }: { client: Client }) {
    return (
        <div className={styles.Client_item}>
            <p>{client.name}</p>
            <p>{client.email}</p>
        </div>
    )
}