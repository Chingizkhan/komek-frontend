import FundraiseList from "@/app/ui/fundraise/list";
import {Suspense} from "react";
import Loader from "@/app/ui/loader/loader";

export default function Page() {
    return (
        <main>
            <Suspense fallback={<Loader />}>
                <FundraiseList />
            </Suspense>
        </main>
    )
}