export const getUsersSelect = (state) => {
    return state.usersPage.users
}

export const pageSazeSelect = (state) => {
    return state.usersPage.pageSaze
}

export const totalPageCountSelect = (state) => {
    return state.usersPage.totalPageCount
}

export const currontPageSelect = (state) => {
    return state.usersPage.currontPage
}

export const gskipSazeSelect = (state) => {
    return state.usersPage.skipSaze
}

export const isFetchingSelect = (state) => {
    return state.usersPage.isFetching
}

export const followingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
