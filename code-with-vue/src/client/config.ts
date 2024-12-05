import {
    Configuration,
    type ErrorContext,
    type Middleware,
    type ResponseContext
} from "@/client/runtime";
import {toast, type ToastOptions} from 'vue3-toastify';


class APIMiddleware implements Middleware {
    post(context: ResponseContext): Promise<Response | void> {
        if (context.response.status < 200 || context.response.status >= 300) {
            const notify = () => {
                let text = context.response.statusText;
                context.response.text().then(bodyText => {
                    if (bodyText) {
                        text = bodyText;
                    }
                }).finally(() => {
                    toast(text, {type: "error"} as ToastOptions);
                });
            }
            notify();
        }
        return Promise.resolve(context.response);
    }

    onError(context: ErrorContext): Promise<Response | void> {
        alert(context.error);
        return Promise.resolve(context.response);
    }
}

export const DEFAULT_CONFIG = new Configuration(
    {
      basePath: window.location.origin,
        middleware: [new APIMiddleware()],
    }
);