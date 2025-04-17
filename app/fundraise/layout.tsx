import styles from './client.module.css'

export default function Layout({ children }) {
    return (
        <>
            <div className={styles.Content}>
                { children }
            </div>
        </>
    )
}