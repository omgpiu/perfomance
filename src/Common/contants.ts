import { Address } from './enums';

interface INavigation {
    title: string;
    address: Address;
}


export const NAVIGATION: INavigation[] = [
    {
        title: 'Expensive Child',
        address: Address.Home,
    },
    {
        title: 'useCallback',
        address: Address.UseCallback,
    },
    {
        title: 'Lists',
        address: Address.Lists,
    },
    {
        title: 'Append',
        address: Address.Append,
    },
    {
        title: 'Context',
        address: Address.Context,

    }, {
        title: 'FastCtx',
        address: Address.FastCtx,
    },
    {
        title: 'Exercise',
        address: Address.WithProps,
    },
];
