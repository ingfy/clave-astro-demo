import type { APIRoute } from "astro";
import type { CreateMessage, Message } from "../../components/tilstand/messages";
import { writeDB } from "../../helpers/db";
import { randomUUID } from "crypto";

export const POST: APIRoute = async function ({ request, redirect }) {
    const formData = await request.formData();
    const sender = formData.get("sender");
    if (!sender) throw new Error(`Missing field "sender"`);
    const text = formData.get("text");
    if (!text) throw new Error(`Missing field "text"`);
    const body: CreateMessage = {
        sender: sender.toString(),
        text: text.toString()
    };

    await writeDB(prev => ({ messages: [...prev.messages, { ...body, received: new Date(), id: randomUUID() }] }));

    return redirect(`${import.meta.env.BASE_URL}/interaktiv-server`);
}