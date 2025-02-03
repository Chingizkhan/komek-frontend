import MerchantList from "@/app/ui/merchant/merchant"
import {Merchant} from "@/app/domain/domain";

const merchants: Merchant[] = [
    {
        id: '0',
        logo: 'logo.png',
        contact_info: {
            email: 'cchalovv@mail.ru',
            phone: '87058113795',
        },
        name: 'Asarume'
    },
    {
        id: '1',
        logo: 'logo.png',
        contact_info: {
            email: 'cchalovv@mail.ru',
            phone: '87058113795',
        },
        name: 'Don\'t silence'
    },
    {
        id: '2',
        logo: 'logo.png',
        contact_info: {
            email: 'cchalovv@mail.ru',
            phone: '87058113795',
        },
        name: 'Mechta',
    },
    {
        id: '3',
        logo: 'logo.png',
        contact_info: {
            email: 'cchalovv@mail.ru',
            phone: '87058113795',
        },
        name: 'One of the best company in the all world'
    },
    {
        id: '4',
        logo: 'logo.png',
        contact_info: {
            email: 'cchalovv@mail.ru',
            phone: '87058113795',
        },
        name: 'One of the best company in the all world'
    },
    {
        id: '5',
        logo: 'logo.png',
        contact_info: {
            email: 'cchalovv@mail.ru',
            phone: '87058113795',
        },
        name: 'One of the best company in the all world'
    }
]

export { merchants };

export default function Page() {
    return (
        <>
            <MerchantList merchants={merchants} />
        </>
    )
}