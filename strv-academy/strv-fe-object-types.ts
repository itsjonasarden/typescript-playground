type Config = {
    api: {
        url: string
        version: number
    }
}

//________________________________________________________________//
// Creating a type of Config, helps us to create new objects with that type so there won't be any typos 
// and when using it inside a function for example, its easier to navigate through the object.
//________________________________________________________________//


const configObject: Config = {
    api: {
        url: 'https://test.com/api',
        version: 1,
    }
}


const doSomething = (config: Config) => {
    config.api.url
}