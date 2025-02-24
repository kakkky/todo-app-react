import { Cookies } from "react-cookie";

export function getCookies(key: string): string {
	const cookies = new Cookies();
	return String(cookies.get(key));
}

export function setCookies(key: string, value: string): void {
	const cookies = new Cookies();
	const now = new Date();
	const expire = new Date(now.getTime() + 24 * 60 * 60 * 1000);
	cookies.set(key, value, { expires: expire, path: "/" });
}
