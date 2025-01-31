// import { getAndDeleteMessages } from "$scripts/message";
// import { getAuthToken } from "$utils/auth";
// import type { RequestEvent } from "@sveltejs/kit";

export async function load(event) {
    return {
        user: event.locals.user,
    }
}