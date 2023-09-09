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
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
    InlineResponse2004,
    InlineResponse2004FromJSON,
    InlineResponse2004ToJSON,
    InlineResponse2005,
    InlineResponse2005FromJSON,
    InlineResponse2005ToJSON,
} from '../models';

export interface GetAccountRequest {
    accountId: string;
}

export interface GetDebondingDelegationsRequest {
    size?: number;
    page?: number;
    height?: number;
    address?: string;
}

export interface GetDelegationsRequest {
    size?: number;
    page?: number;
    height?: number;
    address?: string;
    all?: boolean;
}

export interface GetValidatorsListRequest {
    pageSize?: number;
}

/**
 * 
 */
export class AccountsApi extends runtime.BaseAPI {

    /**
     */
    async getAccountRaw(requestParameters: GetAccountRequest): Promise<runtime.ApiResponse<InlineResponse200>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chain/account/info/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     */
    async getAccount(requestParameters: GetAccountRequest): Promise<InlineResponse200> {
        const response = await this.getAccountRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getDebondingDelegationsRaw(requestParameters: GetDebondingDelegationsRequest): Promise<runtime.ApiResponse<InlineResponse2005>> {
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

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chain/account/debonding`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2005FromJSON(jsonValue));
    }

    /**
     */
    async getDebondingDelegations(requestParameters: GetDebondingDelegationsRequest): Promise<InlineResponse2005> {
        const response = await this.getDebondingDelegationsRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getDelegationsRaw(requestParameters: GetDelegationsRequest): Promise<runtime.ApiResponse<InlineResponse2004>> {
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

        if (requestParameters.all !== undefined) {
            queryParameters['all'] = requestParameters.all;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chain/account/delegations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2004FromJSON(jsonValue));
    }

    /**
     */
    async getDelegations(requestParameters: GetDelegationsRequest): Promise<InlineResponse2004> {
        const response = await this.getDelegationsRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getValidatorsListRaw(requestParameters: GetValidatorsListRequest): Promise<runtime.ApiResponse<InlineResponse2001>> {
        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/validator/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     */
    async getValidatorsList(requestParameters: GetValidatorsListRequest): Promise<InlineResponse2001> {
        const response = await this.getValidatorsListRaw(requestParameters);
        return await response.value();
    }

}
