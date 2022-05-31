type Square = {
    width: number,
    height: number
}

type Circle = {


    radius: number


}



type Shape = Square | Circle

const calculateArea = (shape: Shape) => {
    if ('width' in shape) {
        shape.height
    } else {
        shape.radius
    }
}