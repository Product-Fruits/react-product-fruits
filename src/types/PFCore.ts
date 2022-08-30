export interface ProductFruitsComponentProps {
    workspaceCode: string;
    language: string;
    user: UserObject;
}

export interface UserObject {
    username: string;
    email?: string;
    role?: string;
    signUpAt?: string;
    firstname?: string;
    lastname?: string;
    props?: UserCustomProps
}

export interface UserCustomProps {
    [key: string]: string | number | UserCustomProps;
}