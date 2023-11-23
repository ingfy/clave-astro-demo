import type { APIRoute } from "astro";
import { writeDB } from "../../../../helpers/db";
export const prerender = false;

export const POST: APIRoute = async function ({ params, redirect }) {
    const { id } = params;
    await writeDB(prev => ({
        messages: prev.messages.map(m => m.id === id ? ({
            ...m,
            read: new Date()
        }) : m)
    }))
    return redirect(`${import.meta.env.BASE_URL}/interaktiv-server`);
}