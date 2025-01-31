import { fail, redirect } from "@sveltejs/kit";
import { setAuthToken, setUser } from "$utils/auth";
import { addMessage, Message } from "$scripts/message";
import { papi } from "$utils/api"

export async function loginUser(event){
    const data = await event.request.formData();

    let jsonData = {};
    data.forEach((value, key) => jsonData[key] = value);

    const response = await papi(event.fetch, "auth/login", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(jsonData)
    });
    
    let responseData = await response.json()

    if (response.ok){
        setAuthToken(event.cookies, responseData.access)
        setUser(event, responseData.user)
    }
    else {
        return fail(400, {message: responseData.message, level:"warning"})
    }

    const redirectTo = event.url.searchParams.get("redirectTo")
    if (redirectTo) {
        addMessage(event.cookies, new Message({message: "Success in logging in!"}));
        throw redirect(302,`/${redirectTo.slice(1)}`)
    }
    return {success: true, message: responseData.message, level:"success"};
}

export async function signupUser(event){
    const data = await event.request.formData();

    let jsonData = {};
    data.forEach((value, key) => jsonData[key] = value);

    const response = await papi(event.fetch, "auth/signup", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(jsonData)
    });


    let responseData = await response.json()

    if (response.ok){
        setAuthToken(event.cookies, responseData.token)
    }
    else {
        return fail(400, {"message": responseData.message})
    }

    addMessage(event.cookies, new Message({message: "Signed Up Successfully!"}));
    return {success: true};
}

export function logoutUser(){

}