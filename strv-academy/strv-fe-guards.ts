type RenderFn = () => string

const renderText = (text: string | RenderFn) => {
    if (typeof text === 'string') {
       return text
    } else {
        return text()
    }
}