// tslint:disable
/**
 * Sage Recruitment
 * Simple List API with Nest.js
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AddItemDTO
 */
export interface AddItemDTO {
    /**
     * 
     * @type {string}
     * @memberof AddItemDTO
     */
    listId: string;
    /**
     * 
     * @type {string}
     * @memberof AddItemDTO
     */
    title: string;
}
/**
 * 
 * @export
 * @interface ClearListDTO
 */
export interface ClearListDTO {
    /**
     * 
     * @type {string}
     * @memberof ClearListDTO
     */
    listId: string;
}
/**
 * 
 * @export
 * @interface ListEntity
 */
export interface ListEntity {
    /**
     * 
     * @type {string}
     * @memberof ListEntity
     */
    id: string;
    /**
     * 
     * @type {Array<ListItemEntity>}
     * @memberof ListEntity
     */
    items: Array<ListItemEntity>;
}
/**
 * 
 * @export
 * @interface ListItemEntity
 */
export interface ListItemEntity {
    /**
     * 
     * @type {string}
     * @memberof ListItemEntity
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ListItemEntity
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ListItemEntity
     */
    listId: string;
}
/**
 * 
 * @export
 * @interface RemoveItemDTO
 */
export interface RemoveItemDTO {
    /**
     * 
     * @type {string}
     * @memberof RemoveItemDTO
     */
    itemId: string;
}
/**
 * 
 * @export
 * @interface ReorderItem
 */
export interface ReorderItem {
    /**
     * 
     * @type {number}
     * @memberof ReorderItem
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof ReorderItem
     */
    order: number;
}
/**
 * 
 * @export
 * @interface ReorderListDTO
 */
export interface ReorderListDTO {
    /**
     * 
     * @type {number}
     * @memberof ReorderListDTO
     */
    listId: number;
    /**
     * 
     * @type {Array<ReorderItem>}
     * @memberof ReorderListDTO
     */
    items: Array<ReorderItem>;
}

/**
 * ListApi - axios parameter creator
 * @export
 */
export const ListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddItemDTO} addItemDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerAddItem(addItemDTO: AddItemDTO, options: any = {}): RequestArgs {
            // verify required parameter 'addItemDTO' is not null or undefined
            if (addItemDTO === null || addItemDTO === undefined) {
                throw new RequiredError('addItemDTO','Required parameter addItemDTO was null or undefined when calling listControllerAddItem.');
            }
            const localVarPath = `/list/addItem`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof addItemDTO !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(addItemDTO !== undefined ? addItemDTO : {}) : (addItemDTO || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {ClearListDTO} clearListDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerClear(clearListDTO: ClearListDTO, options: any = {}): RequestArgs {
            // verify required parameter 'clearListDTO' is not null or undefined
            if (clearListDTO === null || clearListDTO === undefined) {
                throw new RequiredError('clearListDTO','Required parameter clearListDTO was null or undefined when calling listControllerClear.');
            }
            const localVarPath = `/list/clear`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof clearListDTO !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(clearListDTO !== undefined ? clearListDTO : {}) : (clearListDTO || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerFindAll(options: any = {}): RequestArgs {
            const localVarPath = `/list`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerFindOne(id: string, options: any = {}): RequestArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling listControllerFindOne.');
            }
            const localVarPath = `/list/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerPost(options: any = {}): RequestArgs {
            const localVarPath = `/list`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RemoveItemDTO} removeItemDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerRemoveItem(removeItemDTO: RemoveItemDTO, options: any = {}): RequestArgs {
            // verify required parameter 'removeItemDTO' is not null or undefined
            if (removeItemDTO === null || removeItemDTO === undefined) {
                throw new RequiredError('removeItemDTO','Required parameter removeItemDTO was null or undefined when calling listControllerRemoveItem.');
            }
            const localVarPath = `/list/removeItem`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof removeItemDTO !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(removeItemDTO !== undefined ? removeItemDTO : {}) : (removeItemDTO || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {ReorderListDTO} reorderListDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerReorder(reorderListDTO: ReorderListDTO, options: any = {}): RequestArgs {
            // verify required parameter 'reorderListDTO' is not null or undefined
            if (reorderListDTO === null || reorderListDTO === undefined) {
                throw new RequiredError('reorderListDTO','Required parameter reorderListDTO was null or undefined when calling listControllerReorder.');
            }
            const localVarPath = `/list/reorder`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof reorderListDTO !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(reorderListDTO !== undefined ? reorderListDTO : {}) : (reorderListDTO || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ListApi - functional programming interface
 * @export
 */
export const ListApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddItemDTO} addItemDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerAddItem(addItemDTO: AddItemDTO, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListItemEntity> {
            const localVarAxiosArgs = ListApiAxiosParamCreator(configuration).listControllerAddItem(addItemDTO, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ClearListDTO} clearListDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerClear(clearListDTO: ClearListDTO, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = ListApiAxiosParamCreator(configuration).listControllerClear(clearListDTO, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerFindAll(options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = ListApiAxiosParamCreator(configuration).listControllerFindAll(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerFindOne(id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = ListApiAxiosParamCreator(configuration).listControllerFindOne(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerPost(options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListEntity> {
            const localVarAxiosArgs = ListApiAxiosParamCreator(configuration).listControllerPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {RemoveItemDTO} removeItemDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerRemoveItem(removeItemDTO: RemoveItemDTO, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = ListApiAxiosParamCreator(configuration).listControllerRemoveItem(removeItemDTO, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ReorderListDTO} reorderListDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerReorder(reorderListDTO: ReorderListDTO, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = ListApiAxiosParamCreator(configuration).listControllerReorder(reorderListDTO, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ListApi - factory interface
 * @export
 */
export const ListApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {AddItemDTO} addItemDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerAddItem(addItemDTO: AddItemDTO, options?: any): AxiosPromise<ListItemEntity> {
            return ListApiFp(configuration).listControllerAddItem(addItemDTO, options)(axios, basePath);
        },
        /**
         * 
         * @param {ClearListDTO} clearListDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerClear(clearListDTO: ClearListDTO, options?: any): AxiosPromise<void> {
            return ListApiFp(configuration).listControllerClear(clearListDTO, options)(axios, basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerFindAll(options?: any): AxiosPromise<void> {
            return ListApiFp(configuration).listControllerFindAll(options)(axios, basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerFindOne(id: string, options?: any): AxiosPromise<void> {
            return ListApiFp(configuration).listControllerFindOne(id, options)(axios, basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerPost(options?: any): AxiosPromise<ListEntity> {
            return ListApiFp(configuration).listControllerPost(options)(axios, basePath);
        },
        /**
         * 
         * @param {RemoveItemDTO} removeItemDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerRemoveItem(removeItemDTO: RemoveItemDTO, options?: any): AxiosPromise<void> {
            return ListApiFp(configuration).listControllerRemoveItem(removeItemDTO, options)(axios, basePath);
        },
        /**
         * 
         * @param {ReorderListDTO} reorderListDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listControllerReorder(reorderListDTO: ReorderListDTO, options?: any): AxiosPromise<void> {
            return ListApiFp(configuration).listControllerReorder(reorderListDTO, options)(axios, basePath);
        },
    };
};

/**
 * ListApi - object-oriented interface
 * @export
 * @class ListApi
 * @extends {BaseAPI}
 */
export class ListApi extends BaseAPI {
    /**
     * 
     * @param {AddItemDTO} addItemDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListApi
     */
    public listControllerAddItem(addItemDTO: AddItemDTO, options?: any) {
        return ListApiFp(this.configuration).listControllerAddItem(addItemDTO, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {ClearListDTO} clearListDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListApi
     */
    public listControllerClear(clearListDTO: ClearListDTO, options?: any) {
        return ListApiFp(this.configuration).listControllerClear(clearListDTO, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListApi
     */
    public listControllerFindAll(options?: any) {
        return ListApiFp(this.configuration).listControllerFindAll(options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListApi
     */
    public listControllerFindOne(id: string, options?: any) {
        return ListApiFp(this.configuration).listControllerFindOne(id, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListApi
     */
    public listControllerPost(options?: any) {
        return ListApiFp(this.configuration).listControllerPost(options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {RemoveItemDTO} removeItemDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListApi
     */
    public listControllerRemoveItem(removeItemDTO: RemoveItemDTO, options?: any) {
        return ListApiFp(this.configuration).listControllerRemoveItem(removeItemDTO, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {ReorderListDTO} reorderListDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListApi
     */
    public listControllerReorder(reorderListDTO: ReorderListDTO, options?: any) {
        return ListApiFp(this.configuration).listControllerReorder(reorderListDTO, options)(this.axios, this.basePath);
    }

}


