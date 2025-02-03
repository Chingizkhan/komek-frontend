import Link from "next/link";
import { LINK_LOGIN } from "@/app/consts/links";

export default function Page() {
    return (
        <div>
            <p>
                Registration page
            </p>
            <Link href={LINK_LOGIN}>To Login</Link>
        </div>
    )
}