async function handleRequest(request) {

    const index = new URL('index.html', import.meta.url)
    const indexResponse = await fetch(index)
    return new Response(indexResponse, {
        headers: {
            'content-type': 'text/html; charset=UTF-8',
        },
    })
}

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
})