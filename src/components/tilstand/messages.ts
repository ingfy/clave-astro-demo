import { action, atom } from "nanostores";

export interface Message {
    id: string;
    received: Date;
    sender: string;
    text: string;
    read?: Date;
}

export type CreateMessage = Omit<Message, "id" | "received" | "read">;

export const $messages = atom<Message[]>([]);

export const read = action($messages, "read", (store, id: string) => {
    store.set(store.get().map(prev => {
        if (prev.id === id) return { ...prev, read: new Date() };
        return prev;
    }))
    return store.get();
});

export const send = action($messages, "send", (store, value: CreateMessage) => {
    store.set([...store.get(), { ...value, received: new Date(), id: crypto.randomUUID() }]);
    return store.get();
});