'use client'

export default function ButtonAction({ text, onClick }: {text: string, onClick}) {
    return (
        <button
            className="mt-6 w-full bg-black text-white py-3 rounded-lg text-lg font-semibold"
            onClick={onClick}
        >
            {text}
        </button>
    )
}