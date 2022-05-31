type Article = Readonly<{
    title: string
    content: string
    author: string
    meta: {
        num: number
    }
}>

type Article2 = Partial<{
    title: string
    content: string
    author: string
    meta: {
        num: number
    }
}>

const testFunction = (article: Article2) => {
    article.title = "Some Title"
    article.content = "Some Content"
    // article.meta.num = 4
}

const getTextFromApi = async () => {
    return {
        text: "Some Text",
        statusCode: 200,
    }
}

type FnSignature = typeof getTextFromApi