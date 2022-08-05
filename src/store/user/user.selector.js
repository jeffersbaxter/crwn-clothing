export const selectCurrentUser = (state) => {
    console.log(state);
    return state.user.currentUser;
};