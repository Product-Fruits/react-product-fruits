import { productFruits } from 'product-fruits';
import React, { useEffect, useMemo, useState } from 'react';

export type UseProductFruitsApiCallback = (pfObject: any) => void;

export function useProductFruitsApi(callback: (api: any) => Function | void | undefined, deps: React.DependencyList) {
    const _deps = useMemo(() => [...deps], [deps]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        let disposer: Function;

        window.productFruitsReady = function () {
            disposer = callback(window.productFruits?.api) as Function;
        }

        if (window.productFruitsIsReady && window.productFruits && window.productFruits.api) {
            disposer = callback(window.productFruits.api) as Function;
        }

        return () => {
            window.productFruitsReady = undefined;

            typeof disposer == 'function' && disposer();
        }
    }, [_deps, callback]);
}

export function isProductFruitsReady() {
    if (typeof window === 'undefined') return false;

    return window.productFruitsIsReady === true;
}