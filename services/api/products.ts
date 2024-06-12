/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";

let url = '/products/3EZJi8agX3Vtj1NnJKkd'

class ProductsService {
  async getAll() {
    const response = await makeRequest.get(url)

    return response.data
  }
}

export default new ProductsService()