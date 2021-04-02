function handleRequest(request) {

    const index = new URL('index.html', import.meta.url)
    return fetch(index)
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
})