import { Message, addMessage } from "$scripts/message";
import { deleteAuthToken, deleteUser } from "$utils/auth";
import { json, redirect } from '@sveltejs/kit';

// export async function POST({ request, cookies }) {
    
//     return json({"status": 201})
// }

export const actions = {
    default: async (event) => {
        deleteAuthToken(event.cookies);
        deleteUser(event)
        addMessage(event.cookies, new Message({message: "Logged out Successfully!"}));
        throw redirect(303, "/")
    }
};