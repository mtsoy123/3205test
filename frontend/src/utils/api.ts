const headers: HeadersInit = {
    "Content-Type": "application/json",
};

type apiProperties = {
    baseUrl: string;
    headers: HeadersInit;
};

type query = {
    email: string;
    number?: string;
};

class Api {
    private readonly _baseUrl: string;
    private readonly _headers: HeadersInit;

    constructor({ baseUrl, headers }: apiProperties) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    protected _checkResponse = (
        url: string,
        options: RequestInit
    ): Promise<any> => {
        return fetch(url, options).then((res) =>
            res.ok ? res.json() : Promise.reject(res.status)
        );
    };

    submit(query: query) {
        return this._checkResponse(this._baseUrl, {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify(query),
        });
    }
}

export const api = new Api({
    baseUrl: "http://localhost:4000/",
    headers: headers,
});
