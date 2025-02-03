import Link from "next/link";
import { LINK_REGISTRATION } from "@/app/consts/links";

export default function Page() {
    return (
        <div>
            <p>
                Login page
            </p>
            <Link href={LINK_REGISTRATION}>To Registration</Link>
        </div>
    )
}