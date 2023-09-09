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
import {
    Allowance,
    AllowanceFromJSON,
    AllowanceFromJSONTyped,
    AllowanceToJSON,
} from './';

/**
 * 
 * @export
 * @interface AccountsRow
 */
export interface AccountsRow {
    /**
     * 
     * @type {number}
     * @memberof AccountsRow
     */
    rank: number;
    /**
     * 
     * @type {string}
     * @memberof AccountsRow
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof AccountsRow
     */
    available: string;
    /**
     * 
     * @type {string}
     * @memberof AccountsRow
     */
    escrow: string;
    /**
     * 
     * @type {string}
     * @memberof AccountsRow
     */
    debonding: string;
    /**
     * 
     * @type {string}
     * @memberof AccountsRow
     */
    total: string;
    /**
     * 
     * @type {number}
     * @memberof AccountsRow
     */
    nonce: number;
    /**
     * 
     * @type {Array<Allowance>}
     * @memberof AccountsRow
     */
    allowances: Array<Allowance>;
}

export function AccountsRowFromJSON(json: any): AccountsRow {
    return AccountsRowFromJSONTyped(json, false);
}

export function AccountsRowFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountsRow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rank': json['rank'],
        'address': json['address'],
        'available': json['available'],
        'escrow': json['escrow'],
        'debonding': json['debonding'],
        'total': json['total'],
        'nonce': json['nonce'],
        'allowances': ((json['allowances'] as Array<any>).map(AllowanceFromJSON)),
    };
}

export function AccountsRowToJSON(value?: AccountsRow | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rank': value.rank,
        'address': value.address,
        'available': value.available,
        'escrow': value.escrow,
        'debonding': value.debonding,
        'total': value.total,
        'nonce': value.nonce,
        'allowances': ((value.allowances as Array<any>).map(AllowanceToJSON)),
    };
}


