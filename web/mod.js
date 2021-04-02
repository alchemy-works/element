async function handleRequest(request) {

    const indexUrl = new URL('index.html', import.meta.url).toString()
    const indexResponse = await fetch(indexUrl)
    const indexText = await indexResponse.text()
    return new Response(indexText, {
        headers: {
            'content-type': 'text/html; charset=UTF-8',
        },
    })
}

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
})