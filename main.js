import { RequestExample1 } from './src/request-example1.js'
import { RequestExample2 } from './src/request-example2.js'
import requestCompose from './src/request-composer.js';

const $request = requestCompose('http://1.1.1.1:8080', RequestExample1, RequestExample2)

export default $request

// $request.getExample(8)