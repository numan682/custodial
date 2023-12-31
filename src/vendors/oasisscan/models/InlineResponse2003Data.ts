/* tslint:disable */
/* eslint-disable */
/**
 * Oasisscan API
 * https://github.com/bitcat365/oasisscan-backend#readme
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
    ParaTimeCtxRow,
    ParaTimeCtxRowFromJSON,
    ParaTimeCtxRowFromJSONTyped,
    ParaTimeCtxRowToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2003Data
 */
export interface InlineResponse2003Data {
    /**
     * 
     * @type {ParaTimeCtxRow}
     * @memberof InlineResponse2003Data
     */
    ctx: ParaTimeCtxRow;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Data
     */
    runtimeName: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Data
     */
    runtimeId: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003Data
     */
    round: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003Data
     */
    timestamp?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Data
     */
    txHash?: string;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2003Data
     */
    result?: boolean;
}

export function InlineResponse2003DataFromJSON(json: any): InlineResponse2003Data {
    return InlineResponse2003DataFromJSONTyped(json, false);
}

export function InlineResponse2003DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2003Data {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ctx': ParaTimeCtxRowFromJSON(json['ctx']),
        'runtimeName': json['runtimeName'],
        'runtimeId': json['runtimeId'],
        'round': json['round'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'txHash': !exists(json, 'txHash') ? undefined : json['txHash'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function InlineResponse2003DataToJSON(value?: InlineResponse2003Data | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ctx': ParaTimeCtxRowToJSON(value.ctx),
        'runtimeName': value.runtimeName,
        'runtimeId': value.runtimeId,
        'round': value.round,
        'timestamp': value.timestamp,
        'txHash': value.txHash,
        'result': value.result,
    };
}


