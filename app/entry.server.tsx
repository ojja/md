import { PassThrough } from "stream";
import { renderToPipeableStream } from "react-dom/server";
import { Response } from "@remix-run/node"; // or cloudflare/deno
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
