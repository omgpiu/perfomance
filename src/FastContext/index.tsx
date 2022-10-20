import { createFastContext } from "./create-fast-context";
import styles from './context.module.css'

const {Provider, useStore} = createFastContext({
    first: "",
    last: "",
});

const TextInput = ({value}: { value: "first" | "last" }) => {
    const [fieldValue, setStore] = useStore((store) => store[value]);

    return (
        <div className={styles.field}>
            {value}:{" "}
            <input
                value={fieldValue}
                onChange={(e) => setStore({[value]: e.target.value})}
            />
        </div>
    );
};

const Display = ({value}: { value: "first" | "last" }) => {
    const [fieldValue] = useStore((store) => store[value]);
    return (
        <div className={styles.value}>
            {value}: {fieldValue}
        </div>
    );
};

const FormContainer = () => {
    return (
        <div className={styles.container}>
            <h5>FormContainer</h5>
            <TextInput value="first"/>
            <TextInput value="last"/>
        </div>
    );
};

const DisplayContainer = () => {
    return (
        <div className={styles.container}>
            <h5>DisplayContainer</h5>
            <Display value="first"/>
            <Display value="last"/>
        </div>
    );
};

const ContentContainer = () => {
    return (
        <div className={styles.container}>
            <h5>ContentContainer</h5>
            <FormContainer/>
            <DisplayContainer/>
        </div>
    );
};

export function FastContextContent() {
    return (
        <Provider>
            <div className={styles.container}>
                <h5>App</h5>
                <ContentContainer/>
            </div>
        </Provider>
    );
}
