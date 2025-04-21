import {Person} from "@/app/domain/domain"
import {listFundraise} from "@/app/lib/actions/fundraise/list"
import FundraiseClientList from "@/app/ui/fundraise/list/client_list"

export default async function FundraiseList() {
    const {data: fundraises} = await listFundraise()

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <FundraiseClientList fundraises={fundraises as Person[]}/>
        </div>
    );
}
