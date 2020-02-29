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

export function ReorderItemFromJSON(json: any): ReorderItem {
    return ReorderItemFromJSONTyped(json, false);
}

export function ReorderItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReorderItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'order': json['order'],
    };
}

export function ReorderItemToJSON(value?: ReorderItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'order': value.order,
    };
}

