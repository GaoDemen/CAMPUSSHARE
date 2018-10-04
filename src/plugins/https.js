import axios from "axios";
import qs from "qs";
const httpUrl =  window.g.ApiUrl;

class Axios {
  /**
   * GET 请求
   * @returns {Promise}
   */
  HttpGet(url, data) {
    this.promise = new Promise((resolve) => {
      axios.get(httpUrl + url, {
            params: data
        }).then(data => {
            resolve(data);
        }).catch(data => {
          console.error(`错误消息:${data}`)
        });
    });
    return this.promise;
  }

  /**
   * POST 请求
   * @returns {Promise}
   */
  HttpPost(url, data) {
    this.promise = new Promise((resolve) => {
      axios.post(httpUrl + url,qs.stringify(data))
        .then(data => {
            resolve(data);
        }).catch(data => {
            console.error(`错误消息:${data}`)
        });
    });
    return this.promise;
  }

}
export default new Axios();
