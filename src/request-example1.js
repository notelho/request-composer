import { RequestAbstract } from "./request-abstract.js";

export class RequestExample1 extends RequestAbstract {

    constructor(api) {
        super(api)
    }

    postExample = async body => await this._post(`/example1/`, body)

}