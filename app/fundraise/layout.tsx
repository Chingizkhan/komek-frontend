import Header from "@/app/ui/header/header"
import Footer from "@/app/ui/footer/footer"
import styles from './client.module.css'

export default function Layout({ children }) {
    return (
        <>
            <Header />
                <div className={styles.Content}>
                    { children }
                </div>
            <Footer />
        </>
    )
}