import {API_URL} from "./config";
import fetch from 'isomorphic-unfetch'
import {ListApi} from "../sdk-fetch/apis";
import {Configuration} from "../sdk-fetch";

// import {ListApi} from "../sdk-axios";
// import {Configuration} from "../sdk-axios";

export default class ApiService {

    public static listApi = new ListApi(new Configuration({basePath: process.env.back}));

    static async fetchAllLists() {
        try {
            let res = await fetch(process.env.back + '/list');
            return await res.json();
        } catch (e) {
            throw(e);
        }
    }

    static async fetchOneList(id: string) {
        console.log(id);
        try {
            let res = await fetch(process.env.back + '/list/' + id);
            return await res.json();
        } catch (e) {
            throw(e);
        }
    }

    static async create() {
        try {
            let res = await fetch(process.env.back + '/list', {
                method: 'POST'
            });
            return await res.json();
        } catch (e) {
            throw(e);
        }

    }

    static async addListItem(id: string) {
    }

    static async removeListItem(id: string) {

    }
}
