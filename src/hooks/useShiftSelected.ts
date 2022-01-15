import { ReactElement, useCallback, useState } from 'react'

/**
 * Note: Shift + Space doesn't work. You need to use something like this,
 *
 * ```
 * onKeyUp={(event) => {
 *   if (event.code === 'Space' && event.target.disabled) {
 *     onChange(event as any, member)
 *   }
 * }}
 * ```
 */
export const useShiftSelected = (
    initialState: Array<string>,
    change: (addOrRemove: boolean, items: Array<string>) => void
) => {
    const [previousSelected, setPreviousSelected] = useState<string | ReactElement[] | null>(null)
    const [previousChecked, setPreviousChecked] = useState<boolean>(false)
    const [currentSelected, setCurrentSelected] = useState<string | ReactElement[] | null>(null)

    const onChange = useCallback(
        (event: MouseEvent, item: string) => {
            const target = event.target as any;
        // @ts-ignore shiftKey is defined for click events
        if (event.nativeEvent.shiftKey) {
            const current = initialState.findIndex((x) => x === item)
            const previous = initialState.findIndex((x) => x === previousSelected)
            const previousCurrent = initialState.findIndex((x) => x === currentSelected
)
            const start = Math.min(current, previous)
            const end = Math.max(current, previous)
            if (start > -1 && end > -1) {
                change(previousChecked, initialState.slice(start, end + 1))
                if (previousCurrent > end) {
                    change(!previousChecked, initialState.slice(end + 1, previousCurrent + 1))
                }
                if (previousCurrent < start) {
                    change(!previousChecked, initialState.slice(previousCurrent, start))
                }
                setCurrentSelected(item)
                return
            }
        } else {
            setPreviousSelected(item)
            setCurrentSelected(null)
            setPreviousChecked(target.value) 
        }
        change(target.value, [item])
        },
        [ change, initialState, previousSelected, setPreviousSelected, previousChecked, setPreviousChecked,  currentSelected, setCurrentSelected ]
    )
    return onChange
};