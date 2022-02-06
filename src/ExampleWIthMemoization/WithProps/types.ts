export type RoleType = 'director' | 'admin'
export type NameType = 'Petr Mihailovich' | 'Vovan'

export interface IUser {
    name: NameType;
    role: RoleType;
}

export interface IChildWithProps {
    options: {
        showPicture: boolean
        title: string
        data?: number[]
        userName?: string
    };
}

export interface ISecondChildWithProps {
    showPicture: boolean;
    title: string;
    data?: number[];
}