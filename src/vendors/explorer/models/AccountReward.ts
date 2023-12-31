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
 * @interface AccountReward
 */
export interface AccountReward {
    /**
     * 
     * @type {number}
     * @memberof AccountReward
     */
    block_level?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountReward
     */
    validator_address?: string;
    /**
     * 
     * @type {number}
     * @memberof AccountReward
     */
    epoch?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountReward
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountReward
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof AccountReward
     */
    created_at?: number;
}

export function AccountRewardFromJSON(json: any): AccountReward {
    return AccountRewardFromJSONTyped(json, false);
}

export function AccountRewardFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountReward {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'block_level': !exists(json, 'block_level') ? undefined : json['block_level'],
        'validator_address': !exists(json, 'validator_address') ? undefined : json['validator_address'],
        'epoch': !exists(json, 'epoch') ? undefined : json['epoch'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'created_at': !exists(json, 'created_at') ? undefined : json['created_at'],
    };
}

export function AccountRewardToJSON(value?: AccountReward | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'block_level': value.block_level,
        'validator_address': value.validator_address,
        'epoch': value.epoch,
        'amount': value.amount,
        'type': value.type,
        'created_at': value.created_at,
    };
}


