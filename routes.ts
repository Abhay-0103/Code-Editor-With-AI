/**
 * publicly accessed
 * auth not required
 * @type {string[]}
 */

export const publicRoutes: string[] = [

]

/**
 * protected 
 * required auth
 * @type {string[]}
 */

export const protectedRoutes: string[] = [
    "/",

]

/**
 * accesed to public
 * start with (/api/auth) prefix not reqed auth
 * @type {string[]}
 */

export const authRoutes: string[] = [
    "/auth/sign-in", // Added leading slash

]

/**
 * public accessed
 * start (/api/auth) prefix not reqesd
 * @type {string}
 */

export const apiAuthPrefix: string = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = "/"; // redireting to home page