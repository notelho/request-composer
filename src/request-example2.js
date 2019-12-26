import { RequestAbstract } from "./request-abstract.js";

export class RequestExample2 extends RequestAbstract {

    constructor(api) {
        super(api)
    }

    getExample = async id => await this._get(`/example2/${id}`)

}