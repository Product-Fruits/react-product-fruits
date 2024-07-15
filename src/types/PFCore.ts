
export interface ProductFruitsComponentProps {
    workspaceCode: string;
    language: string;
    user: ProductFruitsUserObject;
    dontDestroy?: boolean; // to be removed
    lifeCycle?: 'neverUnmount' | 'unmount';
    config?: ProductFruitsInitOptions;
    debug?: boolean;
}

declare global {
    interface Window {
        productFruitsIsReady?: boolean;
        productFruitsReady?: () => void;
        productFruits?: {
            api?: any
        }
    }
}

export type ProductFruitsInitOptions = {
    disableLocationChangeDetection?: boolean;
    disableBannersAutoMargin?: boolean;
    hideInAppCenterLauncher?: boolean;
    customNavigation?: {
        use?: boolean;
        onGet?: () => string;
        navigate?: (location: string) => void
    }
}

export type ProductFruitsUserObject = {
    username: string;
    email?: string;
    role?: string;
    signUpAt?: string;
    firstname?: string;
    lastname?: string;
    props?: UserCustomProps;
    hmac?: {
        hash: string,
        expiration?: string | null | undefined
    };
    group?: {
        groupId?: string;
        props?: UserGroupCustomProps
    }
}

export type UserCustomProps = {
    [key: string]: string | number | boolean | Array<string> | Array<number> | UserCustomProps;
}

export type UserGroupCustomProps = {
    [key: string]: string | number | boolean | Array<string> | Array<number> | UserCustomProps;
}
