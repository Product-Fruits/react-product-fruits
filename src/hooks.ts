import { productFruits } from 'product-fruits';
import React, { useCallback, useEffect } from 'react';

export type UseProductFruitsApiCallback = (pfObject: any) => void;

export function useProductFruitsApi(callback: (api: any) => Function | void | undefined, deps: React.DependencyList) {
    const memoizedCallback = useCallback(callback, deps);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        let disposer: Function;
        const readyListener = () => {
            disposer = memoizedCallback(window.productFruits?.api) as Function;
        }

        if (window.productFruitsIsReady && window.productFruits && window.productFruits.api) {
            disposer = memoizedCallback(window.productFruits.api) as Function;

            window.removeEventListener('productfruits_ready', readyListener);
        } else {
            window.addEventListener('productfruits_ready', readyListener, { once: true });
        }

        return () => {
            window.removeEventListener('productfruits_ready', readyListener);

            typeof disposer == 'function' && disposer();
        }
    }, [...deps, memoizedCallback]);
}

export function isProductFruitsReady() {
    if (typeof window === 'undefined') return false;

    return window.productFruitsIsReady === true;
}