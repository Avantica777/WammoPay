import axios from 'axios'
import Config from '../config'

const WammoPayAPI = {
    baseApi(params, callback) {
        axios.defaults.baseURL = Config.BACKEND_API_URL
        axios.defaults.headers.post['Content-Type'] = 'application/json'
/*
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
*/
        const authHeader = () => ({
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Headers': 'Content-Type',
            "Authorization": "Basic ezQ1MDREMThGLUUzNUItNENFMC05QTY0LTUzRTY2Q0E4M0ExNH06"
        })
        let request = {
            url: params.sub_url,
            method: params.method,
            headers: authHeader(),
            data: typeof params.data !== 'undefined' ? JSON.stringify(params.data) : {}
        }
        console.log("sending data:", request);

        // const url = "https://walmart.com/ip/50676589"
        // var config = { proxy: { host: proxy.ip, port: proxy.port } }

        // axios.get(url, config)
        // .then(result => {})
        // .catch(error => {console.log(error)})

        axios(request).then((res) => {
            if (res.data && res.data.user) {
                localStorage.token = res.data.user.access_token
            }
            if (callback) callback(res.Success ? null : res.Message, res)
        }, (error) => {
            if (callback) callback(error.responseJSON, null)
        })
    },

    ///////////////////
    // Authorization //
    ///////////////////

    login(email, password, callback) {
        this.baseApi(
            {
                sub_url: 'api/v1/user/login',
                method: 'POST',
                data: { email, password }
            },
            (err, res) => {
                if (err == null) {
                    localStorage.user = JSON.stringify(res)
                }
                callback(err, res)
            }
        )
    },

    loggedIn() {
        return !!localStorage.token;
    },
    
    logout() {
        this.baseApi({ sub_url: 'api/Account/Logout', method: 'POST' }, {});
        delete localStorage.token;
        delete localStorage.user;
    },
    
    Register(data, callback) {
        this.baseApi({ sub_url: 'api/Account/Register', method: 'POST', data }, callback)
    },

    generateButton(data, callback){
        this.baseApi(
            { 
                sub_url: 'api/genButton', 
                method: 'POST',
                data: data
            }, 
            (err, res) => {
                if (err == null) {
                    console.log("received data:",res)
                }
                callback(err, res)
            }
        )
    },

    getToken(data, callback){
        this.baseApi(
            {
                sub_url: 'v1/tokens',
                method: 'POST',
                data: data
            },
            (err, res) => {
                if (err == null) {
                    console.log("received token:",res)
                }
                callback(err, res)
            }
        )
    },

    getGatewayId(data, callback){
        this.baseApi(
            {
                sub_url: 'v1/gateways',
                method: 'POST',
                data: data
            },
            (err, res) => {
                if (err == null) {
                    console.log("received gateway id:",res)
                }
                callback(err, res)
            }
        )
    },

    getChageTrasaction(data, callback){
        this.baseApi(
            {
                sub_url: 'v1/charges',
                method: 'POST',
                data: data
            },
            (err, res) => {
                if (err == null) {
                    console.log("received result about transaction:",res)
                }
                callback(err, res)
            }
        )
    }
}

export default WammoPayAPI;