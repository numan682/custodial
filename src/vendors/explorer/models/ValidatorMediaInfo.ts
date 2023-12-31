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
 * @interface ValidatorMediaInfo
 */
export interface ValidatorMediaInfo {
    /**
     * 
     * @type {string}
     * @memberof ValidatorMediaInfo
     */
    website_link?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorMediaInfo
     */
    email_address?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorMediaInfo
     */
    twitter_acc?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorMediaInfo
     */
    tg_chat?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorMediaInfo
     */
    medium_link?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorMediaInfo
     */
    logotype?: string;
}

export function ValidatorMediaInfoFromJSON(json: any): ValidatorMediaInfo {
    return ValidatorMediaInfoFromJSONTyped(json, false);
}

export function ValidatorMediaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorMediaInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'website_link': !exists(json, 'website_link') ? undefined : json['website_link'],
        'email_address': !exists(json, 'email_address') ? undefined : json['email_address'],
        'twitter_acc': !exists(json, 'twitter_acc') ? undefined : json['twitter_acc'],
        'tg_chat': !exists(json, 'tg_chat') ? undefined : json['tg_chat'],
        'medium_link': !exists(json, 'medium_link') ? undefined : json['medium_link'],
        'logotype': !exists(json, 'logotype') ? undefined : json['logotype'],
    };
}

export function ValidatorMediaInfoToJSON(value?: ValidatorMediaInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'website_link': value.website_link,
        'email_address': value.email_address,
        'twitter_acc': value.twitter_acc,
        'tg_chat': value.tg_chat,
        'medium_link': value.medium_link,
        'logotype': value.logotype,
    };
}


