import { useEffect, useMemo } from "react";

/**
 * 
 * @param {*} callback 
 * @returns 
 */
export function useProductFruits(callback, deps) {
    const _deps = useMemo(() => [...deps], [deps]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        window.productFruitsReady = function () {
            callback(window.productFruits.api);
        }

        if (window.productFruitsIsReady) {
            callback(window.productFruits.api);
        }
    }, [_deps, callback]);
}

/**
 * 
 * @returns {boolean}
 */
export function selectIsProductFruitsReady() {
    if (typeof window === 'undefined') return false;

    return window.productFruitsIsReady === true;
}