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
    DelegationRow,
    DelegationRowFromJSON,
    DelegationRowFromJSONTyped,
    DelegationRowToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2004Data
 */
export interface InlineResponse2004Data {
    /**
     * 
     * @type {Array<DelegationRow>}
     * @memberof InlineResponse2004Data
     */
    list: Array<DelegationRow>;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2004Data
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2004Data
     */
    size: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2004Data
     */
    maxPage: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2004Data
     */
    totalSize: number;
}

export function InlineResponse2004DataFromJSON(json: any): InlineResponse2004Data {
    return InlineResponse2004DataFromJSONTyped(json, false);
}

export function InlineResponse2004DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2004Data {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'list': ((json['list'] as Array<any>).map(DelegationRowFromJSON)),
        'page': json['page'],
        'size': json['size'],
        'maxPage': json['maxPage'],
        'totalSize': json['totalSize'],
    };
}

export function InlineResponse2004DataToJSON(value?: InlineResponse2004Data | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'list': ((value.list as Array<any>).map(DelegationRowToJSON)),
        'page': value.page,
        'size': value.size,
        'maxPage': value.maxPage,
        'totalSize': value.totalSize,
    };
}

