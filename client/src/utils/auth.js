// import type { Cookies } from "@sveltejs/kit";

export function setAuthToken(cookies, token){
    cookies.set('Authorization', `Bearer ${token}`, {
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 1 day
    });    
}

export function setUser(event, user){
    event.locals.user = user.user
    event.cookies.set('User', JSON.stringify(user), {
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 1 day
    });    
}

export function getUser(cookies) {
    try{
        return JSON.parse(cookies.get('User'));   
    } catch {
        return undefined
    }
}

export function deleteUser(event) {
    event.locals.user = undefined
    event.cookies.delete('User', { path: '/' });
}

export function getAuthToken(cookies){
    return cookies.get('Authorization');    
}


export function deleteAuthToken(cookies){
    cookies.delete('Authorization', { path: '/' });
}