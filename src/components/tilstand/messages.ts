import { action, atom } from "nanostores";

export interface Message {
    received: Date;
    sender: string;
    text: string;
    read?: Date;
}

export const $messages = atom<Message[]>([]);

export const read = action($messages, "read", (store, value: Message) => {
    store.set(store.get().map(prev => {
        if (prev === value) return { ...prev, read: new Date() };
        return prev;
    }))
    return store.get();
});

export const send = action($messages, "send", (store, value: Omit<Message, "received" | "read">) => {
    store.set([...store.get(), { ...value, received: new Date() }]);
    return store.get();
});