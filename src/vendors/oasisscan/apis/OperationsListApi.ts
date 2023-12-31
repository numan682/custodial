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


import * as runtime from '../runtime';
import {
    InlineResponse2002,
    InlineResponse2002FromJSON,
    InlineResponse2002ToJSON,
} from '../models';

export interface GetTransactionsListRequest {
    runtime: boolean;
    size?: number;
    page?: number;
    height?: number;
    address?: string;
    method?: string;
}

/**
 * 
 */
export class OperationsListApi extends runtime.BaseAPI {

    /**
     */
    async getTransactionsListRaw(requestParameters: GetTransactionsListRequest): Promise<runtime.ApiResponse<InlineResponse2002>> {
        if (requestParameters.runtime === null || requestParameters.runtime === undefined) {
            throw new runtime.RequiredError('runtime','Required parameter requestParameters.runtime was null or undefined when calling getTransactionsList.');
        }

        const queryParameters: any = {};

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.height !== undefined) {
            queryParameters['height'] = requestParameters.height;
        }

        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }

        if (requestParameters.method !== undefined) {
            queryParameters['method'] = requestParameters.method;
        }

        if (requestParameters.runtime !== undefined) {
            queryParameters['runtime'] = requestParameters.runtime;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chain/transactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2002FromJSON(jsonValue));
    }

    /**
     */
    async getTransactionsList(requestParameters: GetTransactionsListRequest): Promise<InlineResponse2002> {
        const response = await this.getTransactionsListRaw(requestParameters);
        return await response.value();
    }

}
