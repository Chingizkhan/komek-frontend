import ClientList from "@/app/ui/client/list";
import {Suspense} from "react";
import Loader from "@/app/ui/loader/loader";

export default function Page() {
    return (
        <main>
            <Suspense fallback={<Loader />}>
                <ClientList />
            </Suspense>
        </main>
    )
}