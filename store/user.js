const days = process.env.NODE_ENV == "development" ? 0.5 * 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000
export const state = () => ({
    token: "",
    islogin: false,
    nickname: "",
    avatar: "",
    qntoken: "",
    qndomain: "",
})


export const mutations = {
    SETUSERMESSAGE(state, data) {
        state.avatar = data.avatar_url
        state.nickname = data.nickname,
        state.islogin = true
    },

    SETQINIUYUN(state, data) {
        state.qntoken = data.qntoken
        state.qndomain = data.qndomain
    },
    SETTOKEN(state, data) {
        if (data.token) {
            state.token = data.token
            state.islogin = true
        }
    },

    LOGIN(state, data) {
        const expiresTime = (new Date().getTime()) + days
        state.token = data.token
        state.islogin = true
        state.needgetuserinfomation = true
        localStorage.setItem("token", data.token)
        localStorage.setItem("token_expires_date", expiresTime)
    },
    LOGOUT(state) {
        localStorage.removeItem("token")
        localStorage.removeItem("userinfo")
        state.token = null
        state.islogin = false
        state.nickname = ""
        state.avatar = ""
        state.intro = ""
    },
}