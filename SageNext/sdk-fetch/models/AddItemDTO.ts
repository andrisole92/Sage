/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
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

export function AddItemDTOFromJSON(json: any): AddItemDTO {
    return AddItemDTOFromJSONTyped(json, false);
}

export function AddItemDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddItemDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'listId': json['listId'],
        'title': json['title'],
    };
}

export function AddItemDTOToJSON(value?: AddItemDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'listId': value.listId,
        'title': value.title,
    };
}


