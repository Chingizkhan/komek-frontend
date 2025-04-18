import DonationCardSkeleton from "@/app/ui/fundraise/skeleton/item/skeleton";

export default function FundraiseSkeletonList() {
    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <DonationCardSkeleton/>
            <DonationCardSkeleton/>
        </div>
    )
}