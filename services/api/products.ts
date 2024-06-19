/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";

let url = "/products/3EZJi8agX3Vtj1NnJKkd";

class ProductsService {
  async getAll() {
    const res = await makeRequest.get(url);

    console.log(res);

    return res.data;
  }
}

export default new ProductsService();
