const DEFAULT_FRACTION = 50

export default function Separator({fraction}: {fraction: number}) {
    const pixels = fraction ? DEFAULT_FRACTION * fraction : DEFAULT_FRACTION

    return (
        <div style={{
            height: pixels+'px',
        }}></div>
    )
}
