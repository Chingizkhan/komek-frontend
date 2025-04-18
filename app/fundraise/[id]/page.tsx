import FundraiseInfo from "@/app/ui/fundraise/fundraise_info/fundraise_info";
import {Suspense} from "react";
import FundraiseInfoSkeleton from "@/app/ui/fundraise/fundraise_info/skeleton/skeleton";

export default async function Page({ params }) {
    const { id } = await params

    return (
        <>
            <Suspense fallback={<FundraiseInfoSkeleton />}>
                <FundraiseInfo id={id} />
            </Suspense>
        </>
    )
}