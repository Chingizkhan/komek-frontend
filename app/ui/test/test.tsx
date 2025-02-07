export function Notification() {
    return (
        <div
            className="flex mx-auto max-w-sm gap-x-4 items-center bg-white rounded-xl p-6 outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <img className="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
            <div>
                <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
                <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
            </div>
        </div>
    )
}
export function Person() {
    return (
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
            <img src="" alt=""/>
            <div className="space-y-2 text-center sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg font-semibold text-black">Erin Lindford</p>
                    <p className="font-medium text-gray-500">Product Engineer</p>
                </div>
                <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
                    Message
                </button>
            </div>
        </div>
    )
}
