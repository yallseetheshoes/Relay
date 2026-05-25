async function webRequest(method, url, body = null) {
    const res = await fetch(url, {
        method,
        headers: body ? { "Content-Type": "application/json" } : undefined,
        body: body ? JSON.stringify(body) : undefined
    });
    const text = await res.text();

    if (!res.ok) {
        throw new Error(`HTTP error ${res.status}: ${text}`);
    }

    return text ? JSON.parse(text) : null;
}
module.exports = webRequest;