export function Categories({ categories }: {categories: string[]}) {
    return (
        <div className="flex flex-wrap justify-center items-center gap-2 text-sm mt-2 mb-3 text-blue-600">
            {categories.map((category, i) =>
                <Category key={i} category={category} primary={i === 0} />)}
        </div>
    )
}

export function Category({category, primary}: { category: string, primary: boolean }) {
    const classes = `${primary ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'} text-sm px-3 py-1 rounded-full flex items-center whitespace-nowrap`
    return (
        <span className={classes}>
            {category}
        </span>
    )
}