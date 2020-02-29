import fetch from 'isomorphic-unfetch'
import {ListApi} from "../sdk-fetch/apis";
import {Configuration} from "../sdk-fetch";
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()


export default class ApiService {

    public static listApi = new ListApi(new Configuration({basePath: publicRuntimeConfig.HOST}));

    static async fetchAllLists() {
        try {
            let res = await fetch(publicRuntimeConfig.BACKEND + '/list');
            return await res.json();
        } catch (e) {
            throw(e);
        }
    }

    static async fetchOneList(id: string) {
        console.log(id);
        try {
            let res = await fetch(publicRuntimeConfig.BACKEND + '/list/' + id);
            return await res.json();
        } catch (e) {
            throw(e);
        }
    }

    static async create() {
        try {
            let res = await fetch(publicRuntimeConfig.BACKEND + '/list', {
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
