import React, { createContext, useCallback, useContext, useEffect, useRef, useState, } from "react";

export function createFastContext<Store>(initialState: Store) {
    function useStoreData(): {
        get: () => Store;
        set: (value: Partial<Store>) => void;
        subscribe: (callback: () => void) => () => void;
    } {
        const store = useRef(initialState);

        const get = useCallback(() => store.current, []);

        const subscribers = useRef(new Set<() => void>());

        const set = useCallback((value: Partial<Store>) => {
            store.current = {...store.current, ...value};
            subscribers.current.forEach((callback) => callback());
        }, []);

        const subscribe = useCallback((callback: () => void) => {
            subscribers.current.add(callback);
            return () => subscribers.current.delete(callback);
        }, []);

        return {
            get,
            set,
            subscribe,
        };
    }

    type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

    const StoreContext = createContext<UseStoreDataReturnType | null>(null);

    function Provider({children}: { children: React.ReactNode }) {
        return (
            <StoreContext.Provider value={useStoreData()}>
                {children}
            </StoreContext.Provider>
        );
    }

    //react 17
    function useStore<SelectorOutput>(
        selector: (store: Store) => SelectorOutput
    ) {
        const store = useContext(StoreContext);
        if (!store) {
            throw new Error("Store not found");
        }

        const [state, setState] = useState(() => selector(store.get()))

        useEffect(() => {
            return store.subscribe(() => setState(() => selector(store.get())))
        }, [])

        return [state, store.set];
    }

    //react 18
    // function useStore<SelectorOutput>(
    //     selector: (store: Store) => SelectorOutput
    // ): [SelectorOutput, (value: Partial<Store>) => void] {
    //     const store = useContext(StoreContext);
    //     if (!store) {
    //         throw new Error("Store not found");
    //     }
    //
    //     const state = useSyncExternalStore(store.subscribe, () =>
    //         selector(store.get())
    //     );
    //
    //     return [state, store.set];
    // }

    return {
        Provider,
        useStore,
    };
}
