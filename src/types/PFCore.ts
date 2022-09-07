
export interface ProductFruitsComponentProps {
    workspaceCode: string;
    language: string;
    user: ProductFruitsUserObject;
    dontDestroy?: boolean;
    config?: ProductFruitsInitOptions;
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