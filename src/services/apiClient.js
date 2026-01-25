const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

export async function post(url, body) {
    let res;

    try {
        res = await fetch(`${API_BASE}${url}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
    } catch (e) {
        throw new Error("Network error. Unable to reach server.");
    }

    let text = "";
    let data = null;

    try {
        text = await res.text();
        data = text ? JSON.parse(text) : null;
    } catch (e) {
        // non-JSON response, keep data as null
    }

    if (!res.ok) {
        throw new Error(
            data?.message ||
            data?.detail?.message ||
            data?.detail ||
            `Request failed (${res.status})`
        );
    }

    return data;
}
