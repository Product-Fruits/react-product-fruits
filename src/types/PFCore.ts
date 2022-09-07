
export interface ProductFruitsComponentProps {
    workspaceCode: string;
    language: string;
    user: ProductFruitsUserObject;
    dontDestroy?: boolean;
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
}

export type ProductFruitsUserObject = {
    username: string;
    email?: string;
    role?: string;
    signUpAt?: string;
    firstname?: string;
    lastname?: string;
    props?: UserCustomProps
}

export type UserCustomProps = {
    [key: string]: string | number | Array<string> | Array<number> | UserCustomProps;
}