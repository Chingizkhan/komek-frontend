import {Merchant, Campaign} from "@/app/domain/domain";
import { merchants } from '@/app/arm/merchants/page'
import styles from './merchant_info.module.css'
import Separator from "@/app/ui/separator/separator";
import { Suspense } from 'react'
import Loader from "@/app/ui/loader/loader";

export default async function Page({ params }) {
    const { id } = await params
    const merchant = await getMerchant(id)

    return (
        <>
            <MerchantInfo merchant={merchant} />
            <Separator />
            <Suspense fallback={<Loader />}>
                <MerchantCampaignList merchantID={merchant.id} />
            </Suspense>
        </>
    )
}

async function getMerchant(id: number): Promise<Merchant> {
    return new Promise((resolve) => {
        resolve(merchants[id])
    })
}

function MerchantInfo({ merchant}: { merchant: Merchant }) {
    return (
        <div className={styles.Merchant_info}>
            <h1>{merchant.name}</h1>
            <p>id: {merchant.id}</p>
            <p>email: {merchant.contact_info.email}</p>
            <p>phone: {merchant.contact_info.phone}</p>
        </div>
    )
}

async function MerchantCampaignList({ merchantID }: {merchantID: string}) {
    const campaigns: Campaign[] = await fetchCampaigns(merchantID)

    return (
        <div className={styles.Merchant_info_campaign_list}>
            <h1>Рекламные кампании</h1>
            <ul>
                {campaigns.map(campaign => (
                    <li key={campaign.id}>
                        <MerchantCampaign campaign={campaign} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

const campaigns : Campaign[] = [
    {
        id: '0',
        name: 'Первый'
    },
    {
        id: '1',
        name: 'Второй'
    },
    {
        id: '2',
        name: 'Третий'
    },
    {
        id: '3',
        name: 'Четвертый'
    },
    {
        id: '4',
        name: 'Пятый'
    }
]

async function fetchCampaigns(merchantID: string) : Promise<Campaign[]> {
    await new Promise(resolve => setTimeout(resolve, 1500))

    return new Promise<Campaign[]>(resolve => resolve(campaigns))
}

function MerchantCampaign({ campaign }: { campaign: Campaign }) {
    return (
        <>
            <div className={styles.Merchant_info_campaign_item}>
                {campaign.name}
            </div>
        </>
    )
}