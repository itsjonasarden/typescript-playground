type Payload =
    | { kind: "Error", code: number }
    | { kind: "Success", message: string }
    | { kind: "Not Found" }

const getMessage = (response: Payload) => {
    switch (response.kind) {
        case "Success":
            return `Success! ${response.message}`;
        case "Error":
            return `Error occured. Code: ${response.code}`;
        case "Not Found":
            return "Not Found"
    }
}

