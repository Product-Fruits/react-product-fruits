import React, { useEffect, useRef } from 'react';
import { ProductFruitsComponentProps } from './types/PFCore';
import { productFruits } from 'product-fruits';

export function ProductFruits(props: ProductFruitsComponentProps) {
    useEffect(() => {
        productFruits.init(props.workspaceCode, props.language, props.user, props.config);

        props.debug && console.log('react-product-fruits - initialized');

        return () => {
            if (props.dontDestroy !== true) {
                props.debug && console.log('react-product-fruits - destroying');
                /** @ts-ignore */ // TEMP
                window?.productFruits?.services?.destroy();
            } else {
                props.debug && console.log('react-product-fruits - skipping destroying');
            }
        }
    }, []);

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            props.debug && console.log('react-product-fruits - user prop updated');

            productFruits.safeExec(($api) => {
                $api.push(['updateUserData', props.user]);
            });
        }
    }, [props.user]);

    return null;
}

export * from './hooks';