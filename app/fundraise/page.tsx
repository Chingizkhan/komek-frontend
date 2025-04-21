import FundraiseList from "@/app/ui/fundraise/list/server_list"
import {Suspense} from "react"
import FundraiseSkeletonList from "@/app/ui/fundraise/skeleton/list/skeleton_list";

export default function Page() {
    return (
        <main>
            <Suspense fallback={<FundraiseSkeletonList />}>
                <FundraiseList />
            </Suspense>
        </main>
    )
}

