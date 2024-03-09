
import React from 'react'

interface EachProps<T> {
    items: T[]
    renderItem: (item: T) => React.ReactNode
}

export function Each<T>({ items, renderItem }: EachProps<T>) {
    return <> { items.map(renderItem) } </>
}
