type User = {
    name: string
    age: number
}

type Post = {
    title: string
}


type ApiPayload<Data> = {
    statusCode: number
    data: Data
}


const parseApi = (payload: ApiPayload<Post>) => {
    payload.data.title
}

const filterSuccessfulResponses = <Data>(payloads: ApiPayload<Data>[]) => {
    return payloads.filter(p => p.statusCode === 200)
}

const payloads: ApiPayload<Post | User>[] = []

const results = filterSuccessfulResponses(payloads)

const first = results[0].data

if ('name' in first) {
    first.name
} else {
    first.title
}