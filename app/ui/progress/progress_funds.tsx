

export function ProgressFunds({ from, to, title }: {from: number, to: number, title: string}) {
    return (
        <div className="mt-6">
            <p className="text-gray-700 font-semibold">{title}</p>
            <div className="bg-gray-200 rounded-full h-2 mt-2">
                <div
                    className="bg-purple-600 h-2 rounded-full transition-all"
                    style={{width: `${(from / to) * 100}%`}}
                ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
                {from.toLocaleString()} ₸ из {to.toLocaleString()} ₸
            </p>
        </div>
    )
}