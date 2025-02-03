import ClientInfo from "@/app/ui/client/client_info/client_info";
import {Suspense} from "react";
import Loader from "@/app/ui/loader/loader";

export default async function Page({ params }) {
    const { id } = await params

    return (
        <>
            <Suspense fallback={<Loader />}>
                <ClientInfo id={id} />
            </Suspense>
        </>
    )
}