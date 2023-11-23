import fs from "fs";
import util from "util";
import type { Message } from "../components/tilstand/messages";

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const exists = util.promisify(fs.exists);

interface DB {
    messages: Message[];
}

const initial: DB = { messages: [] };
const fn = "db.json";

export async function loadDB() {
    if (!await exists(fn)) {
        await writeFile(fn, JSON.stringify(initial));
    }

    const buffer = await readFile(fn);
    return JSON.parse(buffer.toString("utf8")) as DB;
}

export async function writeDB(update: (prev: DB) => DB) {
    const prev = await loadDB();
    const next = update(prev);
    await writeFile(fn, JSON.stringify(next));
}