/* tslint:disable */
/* eslint-disable */
/**
 * OasisExplorer API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
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
 * @interface ValidatorCommissionScheduleBounds
 */
export interface ValidatorCommissionScheduleBounds {
    /**
     * 
     * @type {number}
     * @memberof ValidatorCommissionScheduleBounds
     */
    start?: number;
    /**
     * 
     * @type {string}
     * @memberof ValidatorCommissionScheduleBounds
     */
    rate_min?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorCommissionScheduleBounds
     */
    rate_max?: string;
}

export function ValidatorCommissionScheduleBoundsFromJSON(json: any): ValidatorCommissionScheduleBounds {
    return ValidatorCommissionScheduleBoundsFromJSONTyped(json, false);
}

export function ValidatorCommissionScheduleBoundsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorCommissionScheduleBounds {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'start': !exists(json, 'start') ? undefined : json['start'],
        'rate_min': !exists(json, 'rate_min') ? undefined : json['rate_min'],
        'rate_max': !exists(json, 'rate_max') ? undefined : json['rate_max'],
    };
}

export function ValidatorCommissionScheduleBoundsToJSON(value?: ValidatorCommissionScheduleBounds | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'start': value.start,
        'rate_min': value.rate_min,
        'rate_max': value.rate_max,
    };
}


