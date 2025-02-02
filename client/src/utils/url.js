import { resolveRoute } from "$app/paths";

export const _url = {
  "login":"/login",
  "logout":"/logout",
  "signup":"/signup",
  "projects":"/projects",
  "profile":"/profile",
}

/**
 * @param {string} alias
 */
export function url(alias, kwargs ={}) {
  // console.log(alias, kwargs)
  return resolveRoute(_url[alias], kwargs)
}
