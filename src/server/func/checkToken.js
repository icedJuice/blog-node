/*
*
*  be used for check token
*  if it's ok ,will return user's message
*  or will return false
*/

const checkToken = function (token) {
    // search sql to verify token
    // we will do some sql methods here

    if (token) {
        return {
            username: '寒玉知'
        }
    } else {
        return false;
    }
}