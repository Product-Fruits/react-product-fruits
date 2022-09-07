import React, { useEffect } from 'react';
import { ProductFruitsComponentProps } from './types/PFCore';
import { productFruits } from 'product-fruits';

export function ProductFruits(props: ProductFruitsComponentProps) {
    useEffect(() => {
        productFruits.init(props.workspaceCode, props.language, props.user, props.config);

        return () => {
            if (props.dontDestroy !== true) {
                /** @ts-ignore */ // TEMP
                window?.productFruits?.services?.destroy();
            }
        }
    }, []);

    useEffect(() => {
        productFruits.safeExec(($api) => {
            $api.push(['updateUserData', props.user]);
        });
    }, [props.user]);

    return null;
}