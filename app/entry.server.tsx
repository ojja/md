import { PassThrough } from "stream";
import { renderToPipeableStream } from "react-dom/server";
import { EntryContext } from "@remix-run/cloudflare";
import { RemixServer } from "@remix-run/react";

export default function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext
) {
    return new Promise((resolve) => {
        const { pipe } = renderToPipeableStream(
            <RemixServer
                context={remixContext}
                url={request.url}
            />,
            {
                onShellReady() {
                    const body = new PassThrough();

                    responseHeaders.set("Content-Type", "text/html");
                    responseHeaders.set("Transfer-Encoding", "chunked");
                    responseHeaders.set("Connection", "keep-alive");
                    if (responseStatusCode === 304)
                        return new Response(null, { status: responseStatusCode })


                    resolve(
                        new Response(body, {
                            status: responseStatusCode,
                            headers: responseHeaders,
                        })
                    );
                    pipe(body);
                },
            }
        );
    });
}
