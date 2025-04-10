import FundraiseInfo from "@/app/ui/fundraise/fundraise_info/fundraise_info";
import {Suspense} from "react";
import Loader from "@/app/ui/loader/loader";

export default async function Page({ params }) {
    const { id } = await params

    return (
        <>
            <Suspense fallback={<Loader />}>
                <FundraiseInfo id={id} />
            </Suspense>
        </>
    )
}