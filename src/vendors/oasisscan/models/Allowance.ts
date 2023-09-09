/* tslint:disable */
/* eslint-disable */
/**
 * Oasisscan API
 * https://github.com/bitcat365/oasisscan-backend#readme https://api.oasisscan.com/mainnet/swagger-ui/#/ https://api.oasisscan.com/mainnet/v2/api-docs 
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
 * @interface Allowance
 */
export interface Allowance {
    /**
     * 
     * @type {string}
     * @memberof Allowance
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof Allowance
     */
    amount: string;
}

export function AllowanceFromJSON(json: any): Allowance {
    return AllowanceFromJSONTyped(json, false);
}

export function AllowanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Allowance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'amount': json['amount'],
    };
}

export function AllowanceToJSON(value?: Allowance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'amount': value.amount,
    };
}


