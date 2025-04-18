import Skeleton from "react-loading-skeleton";

export default function FundraiseInfoSkeleton() {
    return (
        <div className="flex flex-col items-stretch mb-6 border-2 border-solid rounded-2xl p-0 border-t-0">
            <Skeleton className="!rounded-t-2xl mb-2" height={545}/>
            <div className="p-4 flex flex-col">
                <div className="mx-auto mb-2">
                    <Skeleton borderRadius={20} width={200} height={25}/>
                </div>
                <div className="flex mx-auto mb-2 gap-4">
                    <Skeleton borderRadius={20} width={100} height={25}/>
                    <Skeleton borderRadius={20} width={100} height={25}/>
                </div>
                <div className="flex mx-auto gap-4 mb-6">
                    <Skeleton borderRadius={20} width={100} height={25}/>
                </div>
                <Skeleton borderRadius={8} height={20} width={200}/>
                <Skeleton borderRadius={8} height={8}/>
                <Skeleton borderRadius={8} height={18} width={150} className="mb-4"/>

                <Skeleton borderRadius={8} height={72} className="mb-4"/>

                <Skeleton borderRadius={8} height={24} width={150} />
                <Skeleton borderRadius={8} height={150} className="mb-10"/>

                <Skeleton borderRadius={8} height={52}/>
            </div>
        </div>
    )
}