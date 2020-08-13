
//updating data for an object in an array when using couchDB
export const updateObjectInArray = (items, objPropName, itemId, newObjProps) => {
    debugger
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {
                ...u,
                doc: { ...u.doc, newObjProps }
            }
        }
        return u
    })
}

               /*{users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            doc: { ...u.doc, follow: false }
                        }
                    }
                    return u
                })}*/