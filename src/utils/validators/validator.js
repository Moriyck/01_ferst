export const requiredField = value => {
    if (value) return undefined

    return "Field required"
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `The maximum length must be ${maxLength} characters!!!`
    return undefined
}

export const minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength) return `The minimum length must be ${minLength} characters!!!`
    return undefined
}