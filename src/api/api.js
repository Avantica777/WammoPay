import axios from 'axios'
import Config from '../config'

const WammoPayAPI = {
    baseApi(params, callback) {
        axios.defaults.baseURL = Config.BACKEND_API_URL
/*
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
*/
        const authHeader = () => ({
            "Authorization": "Basic ezQ1MDREMThGLUUzNUItNENFMC05QTY0LTUzRTY2Q0E4M0ExNH06",
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        })
        let request = {
            url: params.sub_url,
            method: params.method,
            headers: authHeader(),
            processData: false,
            data: typeof params.data !== 'undefined' ? params.data : {}
        }

        console.log("sending data:", request);

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

        // const url = 'http://192.168.90.251:8764/common/dotLogController/sendLog';
        // axios.post(
        //     url,
        //     {
        //         topic: 'topic',
        //         logs: fakeData, // look ma, no JSON.stringify()!
        //     }
        // );
        // const dt = JSON.stringify({"data":{"value":"gdfg1df2g2121dgfdg"}});
        // const responsedata = axios.post('https://api.wammopay.com/v1/tokens', data);
        // const responsedata = axios.post('https://api.medlanes.com/booking_center/call/get_products', data);
        // console.log("what's response:", responsedata);
        this.baseApi(
            {
                sub_url: 'v1/tokens',
                method: "POST",
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