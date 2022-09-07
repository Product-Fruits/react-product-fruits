import { productFruits } from 'product-fruits';
import React, { useEffect, useMemo, useState } from 'react';

export type UseProductFruitsApiCallback = (pfObject: any) => void;

export function useProductFruitsApi(callback: (api: any) => void, deps: React.DependencyList) {
    const _deps = useMemo(() => [...deps], [deps]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        window.productFruitsReady = function () {
            callback(window.productFruits?.api);
        }

        if (window.productFruitsIsReady && window.productFruits && window.productFruits.api) {
            callback(window.productFruits.api);
        }
    }, [_deps, callback]);
}

export function isProductFruitsReady() {
    if (typeof window === 'undefined') return false;

    return window.productFruitsIsReady === true;
}