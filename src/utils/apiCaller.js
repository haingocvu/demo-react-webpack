import Axios from "axios";
import * as Config from "./../constants/config";

let callAPI = (method = 'GET', endpoint, data = null) => {
    return Axios({
        method: method,
        url: `${Config.HOSTNAME}/${endpoint}`,
        data: data
    })
}

export default callAPI;