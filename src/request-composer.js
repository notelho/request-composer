import { RequestAbstract } from "./request-abstract.js";

export default (api, ...classes) => {

    let request = {}

    classes.map(ClassCompose => {

        let name = ClassCompose.name
            .split(/(?=[A-Z])/)
            .map(n => n.toLowerCase())
            .filter(n => n !== 'request')
            .map((n, index) => index !== 0 ? n.charAt(0).toUpperCase() + s.slice(1) : n)
            .reduce((p, c) => p + c, '')

        try {

            let classHandler = new ClassCompose(api)

            if (!classHandler instanceof RequestAbstract || typeof classHandler !== 'object') {
                throw new Error('Invalid class at request-composer')
            }

            request[name] = classHandler

        } catch (err) {
            throw err
        }

    })

    return new Proxy(request, {

        get: function (instances, attr, self) {

            for (let i in instances) {

                const handler = instances[i]
                const prop = handler[attr]

                if (prop) {
                    if (typeof prop !== 'function')
                        throw new Error('Cant access atributes from instances')

                    return prop
                }
            }

            return undefined
        }
    })
}