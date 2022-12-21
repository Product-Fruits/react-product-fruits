import { productFruits } from 'product-fruits';
import React, { useCallback, useEffect } from 'react';

export type UseProductFruitsApiCallback = (pfObject: any) => void;

export function useProductFruitsApi(callback: (api: any) => Function | void | undefined, deps: React.DependencyList) {
    const memoizedCallback = useCallback(callback, deps);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        let disposer: Function;

        window.productFruitsReady = function () {
            disposer = memoizedCallback(window.productFruits?.api) as Function;
        }

        if (window.productFruitsIsReady && window.productFruits && window.productFruits.api) {
            disposer = memoizedCallback(window.productFruits.api) as Function;
        }

        return () => {
            window.productFruitsReady = undefined;

            typeof disposer == 'function' && disposer();
        }
    }, [...deps, memoizedCallback]);
}

export function isProductFruitsReady() {
    if (typeof window === 'undefined') return false;

    return window.productFruitsIsReady === true;
}