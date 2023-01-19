import { useEffect, useRef } from 'react';
import { ProductFruitsComponentProps } from './types/PFCore';
import { productFruits } from 'product-fruits';

export function ProductFruits(props: ProductFruitsComponentProps) {
    if (props.dontDestroy != null) {
        console.error('<ProductFruits /> - dontDestroy is deprecated and it WILL NOT work, use lifeCycle instead')
        return null;
    }

    useEffect(() => {
        productFruits.init(props.workspaceCode, props.language, props.user, props.config);

        props.debug && console.log('react-product-fruits - initialized');

        return () => {
            if (!props.lifeCycle || props.lifeCycle == 'neverUnmount') {
                props.debug && console.log('react-product-fruits - skipping destroying, lifeCycle default or set to neverUnmount', props.lifeCycle);
            } else if (props.lifeCycle == 'unmount') {
                props.debug && console.log('react-product-fruits - destroying');
                /** @ts-ignore */ // TEMP
                window?.productFruits?.services?.destroy();
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