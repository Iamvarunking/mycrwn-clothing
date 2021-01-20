import { userActionTypes } from '../user/user.types'

const setCurrentUser = user => ({
    type : userActionTypes.SET_CURRENT_USER,
    payload  : user
}) ;

export default setCurrentUser ;