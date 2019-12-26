export class RequestAbstract {

    constructor(api) {
        this._api = api
    }

    _post(url, body) {
        return new Promise(async (resolve, reject) => {
            $.ajax({
                type: "POST",
                url: this._api + url,
                data: body,
                success: data => resolve(data),
                error: error => reject(error),
            })
        })
    }

    _get(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: this._api + url,
                success: data => resolve(data),
                error: error => reject(error),
            })
        })
    }

}
