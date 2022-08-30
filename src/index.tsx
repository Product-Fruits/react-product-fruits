import React, { useEffect } from 'react';
import { ProductFruitsComponentProps } from './types/PFCore';
import { productFruits } from 'product-fruits';

export function ProductFruits(props: ProductFruitsComponentProps) {
    useEffect(() => {
        productFruits.init(props.workspaceCode, props.language, props.user);

        return () => {
            // todo: destroy
        }
    }, []);

    return null;
}