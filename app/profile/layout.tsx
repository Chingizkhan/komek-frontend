import {ReactNode} from "react";
import styles from "@/app/profile/profile.module.css";

export default function Layout({children}: {children: ReactNode}) {
    return (
        <>
            <div className={styles.Container}>
                {children}
            </div>
        </>
    )
}