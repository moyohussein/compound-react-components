import { MutableRefObject, LegacyRef, RefCallback } from "react";

export default function useForkRef<T = any>( refs: Array<MutableRefObject<T> | undefined | LegacyRef<T>>): RefCallback<T> {
    return (value) => {
        refs.forEach((ref) => {
            if (typeof ref === "function") {
            ref(value);
            } else if (ref != null) {
            (ref as MutableRefObject<T | null>).current = value;
            }
        });
    };
}