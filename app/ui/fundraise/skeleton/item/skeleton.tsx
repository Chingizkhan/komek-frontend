import Skeleton from "react-loading-skeleton";

export default function DonationCardSkeleton() {
    return (
        <div className="flex flex-col items-stretch mb-6 border-2 border-solid rounded-2xl p-0 border-t-0">
            <Skeleton className="!rounded-t-2xl" height={240} />
            <div className="p-4 flex flex-col">
                <div className="mx-auto mb-2">
                    <Skeleton borderRadius={20} width={108} height={25}/>
                </div>
                <Skeleton borderRadius={8} height={28}/>
                <Skeleton borderRadius={8} height={20} className="mb-4"/>
                <Skeleton borderRadius={8} height={8}/>
                <Skeleton borderRadius={8} height={18} width={150} className="mb-4"/>
                <Skeleton borderRadius={8} height={52}/>
            </div>
        </div>
    )
}