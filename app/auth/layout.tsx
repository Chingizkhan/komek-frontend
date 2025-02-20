import Header from "@/app/ui/header/header";
import Footer from "@/app/ui/footer/footer";
import { ReactNode } from "react"
import styles from "./auth.module.css"

export default function Layout({ children } : {children: ReactNode}) {
    return (
        <>
            {/*<Header />*/}
            <div className={styles.Container}>
                {children}
            </div>
            {/*<Footer />*/}
        </>
    )
}