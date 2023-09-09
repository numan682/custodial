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


import * as runtime from '../runtime';
import {
    AccountListItem,
    AccountListItemFromJSON,
    AccountListItemToJSON,
    AccountReward,
    AccountRewardFromJSON,
    AccountRewardToJSON,
    AccountRewardsStat,
    AccountRewardsStatFromJSON,
    AccountRewardsStatToJSON,
    AccountsRow,
    AccountsRowFromJSON,
    AccountsRowToJSON,
    BalanceChart,
    BalanceChartFromJSON,
    BalanceChartToJSON,
    ValidatorDelegator,
    ValidatorDelegatorFromJSON,
    ValidatorDelegatorToJSON,
    ValidatorEntity,
    ValidatorEntityFromJSON,
    ValidatorEntityToJSON,
    ValidatorReward,
    ValidatorRewardFromJSON,
    ValidatorRewardToJSON,
    ValidatorRewardsStat,
    ValidatorRewardsStatFromJSON,
    ValidatorRewardsStatToJSON,
    ValidatorRow,
    ValidatorRowFromJSON,
    ValidatorRowToJSON,
    ValidatorStat,
    ValidatorStatFromJSON,
    ValidatorStatToJSON,
} from '../models';

export interface GetAccountRequest {
    accountId: string;
}

export interface GetAccountBalanceChartRequest {
    accountId: string;
    frame: GetAccountBalanceChartFrameEnum;
    from: number;
    to: number;
}

export interface GetAccountRewardsRequest {
    accountId: string;
    limit: number;
    offset: number;
}

export interface GetAccountsListRequest {
    limit?: number;
    offset?: number;
    sortColumn?: GetAccountsListSortColumnEnum;
    sortSide?: GetAccountsListSortSideEnum;
}

export interface GetAccountsRewardsStatRequest {
    accountId: string;
}

export interface GetValidatorDelegatorsListRequest {
    accountId: string;
    limit?: number;
    offset?: number;
}

export interface GetValidatorInfoRequest {
    accountId: string;
    limit?: number;
    offset?: number;
}

export interface GetValidatorRewardsRequest {
    accountId: string;
    limit: number;
    offset: number;
}

export interface GetValidatorRewardsStatRequest {
    accountId: string;
}

export interface GetValidatorStatChartRequest {
    accountId: string;
    frame: GetValidatorStatChartFrameEnum;
    from: number;
    to: number;
}

export interface GetValidatorsListRequest {
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class AccountsApi extends runtime.BaseAPI {

    /**
     */
    async getAccountRaw(requestParameters: GetAccountRequest): Promise<runtime.ApiResponse<AccountsRow>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/data/accounts/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountsRowFromJSON(jsonValue));
    }

    /**
     */
    async getAccount(requestParameters: GetAccountRequest): Promise<AccountsRow> {
        const response = await this.getAccountRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getAccountBalanceChartRaw(requestParameters: GetAccountBalanceChartRequest): Promise<runtime.ApiResponse<Array<BalanceChart>>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getAccountBalanceChart.');
        }

        if (requestParameters.frame === null || requestParameters.frame === undefined) {
            throw new runtime.RequiredError('frame','Required parameter requestParameters.frame was null or undefined when calling getAccountBalanceChart.');
        }

        if (requestParameters.from === null || requestParameters.from === undefined) {
            throw new runtime.RequiredError('from','Required parameter requestParameters.from was null or undefined when calling getAccountBalanceChart.');
        }

        if (requestParameters.to === null || requestParameters.to === undefined) {
            throw new runtime.RequiredError('to','Required parameter requestParameters.to was null or undefined when calling getAccountBalanceChart.');
        }

        const queryParameters: any = {};

        if (requestParameters.frame !== undefined) {
            queryParameters['frame'] = requestParameters.frame;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chart/balance/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BalanceChartFromJSON));
    }

    /**
     */
    async getAccountBalanceChart(requestParameters: GetAccountBalanceChartRequest): Promise<Array<BalanceChart>> {
        const response = await this.getAccountBalanceChartRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getAccountRewardsRaw(requestParameters: GetAccountRewardsRequest): Promise<runtime.ApiResponse<Array<AccountReward>>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getAccountRewards.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling getAccountRewards.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling getAccountRewards.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/data/accounts/{account_id}/rewards`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AccountRewardFromJSON));
    }

    /**
     */
    async getAccountRewards(requestParameters: GetAccountRewardsRequest): Promise<Array<AccountReward>> {
        const response = await this.getAccountRewardsRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getAccountsListRaw(requestParameters: GetAccountsListRequest): Promise<runtime.ApiResponse<Array<AccountListItem>>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.sortColumn !== undefined) {
            queryParameters['sort_column'] = requestParameters.sortColumn;
        }

        if (requestParameters.sortSide !== undefined) {
            queryParameters['sort_side'] = requestParameters.sortSide;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/data/accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AccountListItemFromJSON));
    }

    /**
     */
    async getAccountsList(requestParameters: GetAccountsListRequest): Promise<Array<AccountListItem>> {
        const response = await this.getAccountsListRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getAccountsRewardsStatRaw(requestParameters: GetAccountsRewardsStatRequest): Promise<runtime.ApiResponse<AccountRewardsStat>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getAccountsRewardsStat.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/data/accounts/{account_id}/rewards/stat`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountRewardsStatFromJSON(jsonValue));
    }

    /**
     */
    async getAccountsRewardsStat(requestParameters: GetAccountsRewardsStatRequest): Promise<AccountRewardsStat> {
        const response = await this.getAccountsRewardsStatRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getPublicValidatorsSearchListRaw(): Promise<runtime.ApiResponse<Array<ValidatorEntity>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/data/validators/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ValidatorEntityFromJSON));
    }

    /**
     */
    async getPublicValidatorsSearchList(): Promise<Array<ValidatorEntity>> {
        const response = await this.getPublicValidatorsSearchListRaw();
        return await response.value();
    }

    /**
     */
    async getValidatorDelegatorsListRaw(requestParameters: GetValidatorDelegatorsListRequest): Promise<runtime.ApiResponse<Array<ValidatorDelegator>>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getValidatorDelegatorsList.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/data/validator/{account_id}/delegators`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ValidatorDelegatorFromJSON));
    }

    /**
     */
    async getValidatorDelegatorsList(requestParameters: GetValidatorDelegatorsListRequest): Promise<Array<ValidatorDelegator>> {
        const response = await this.getValidatorDelegatorsListRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getValidatorInfoRaw(requestParameters: GetValidatorInfoRequest): Promise<runtime.ApiResponse<Array<ValidatorRow>>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getValidatorInfo.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/data/validator/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ValidatorRowFromJSON));
    }

    /**
     */
    async getValidatorInfo(requestParameters: GetValidatorInfoRequest): Promise<Array<ValidatorRow>> {
        const response = await this.getValidatorInfoRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getValidatorRewardsRaw(requestParameters: GetValidatorRewardsRequest): Promise<runtime.ApiResponse<Array<ValidatorReward>>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getValidatorRewards.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling getValidatorRewards.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling getValidatorRewards.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/data/validator/{account_id}/rewards`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ValidatorRewardFromJSON));
    }

    /**
     */
    async getValidatorRewards(requestParameters: GetValidatorRewardsRequest): Promise<Array<ValidatorReward>> {
        const response = await this.getValidatorRewardsRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getValidatorRewardsStatRaw(requestParameters: GetValidatorRewardsStatRequest): Promise<runtime.ApiResponse<ValidatorRewardsStat>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getValidatorRewardsStat.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/data/validator/{account_id}/rewards/stat`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ValidatorRewardsStatFromJSON(jsonValue));
    }

    /**
     */
    async getValidatorRewardsStat(requestParameters: GetValidatorRewardsStatRequest): Promise<ValidatorRewardsStat> {
        const response = await this.getValidatorRewardsStatRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getValidatorStatChartRaw(requestParameters: GetValidatorStatChartRequest): Promise<runtime.ApiResponse<Array<ValidatorStat>>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getValidatorStatChart.');
        }

        if (requestParameters.frame === null || requestParameters.frame === undefined) {
            throw new runtime.RequiredError('frame','Required parameter requestParameters.frame was null or undefined when calling getValidatorStatChart.');
        }

        if (requestParameters.from === null || requestParameters.from === undefined) {
            throw new runtime.RequiredError('from','Required parameter requestParameters.from was null or undefined when calling getValidatorStatChart.');
        }

        if (requestParameters.to === null || requestParameters.to === undefined) {
            throw new runtime.RequiredError('to','Required parameter requestParameters.to was null or undefined when calling getValidatorStatChart.');
        }

        const queryParameters: any = {};

        if (requestParameters.frame !== undefined) {
            queryParameters['frame'] = requestParameters.frame;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chart/validator_stat/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ValidatorStatFromJSON));
    }

    /**
     */
    async getValidatorStatChart(requestParameters: GetValidatorStatChartRequest): Promise<Array<ValidatorStat>> {
        const response = await this.getValidatorStatChartRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getValidatorsListRaw(requestParameters: GetValidatorsListRequest): Promise<runtime.ApiResponse<Array<ValidatorRow>>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/data/validators`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ValidatorRowFromJSON));
    }

    /**
     */
    async getValidatorsList(requestParameters: GetValidatorsListRequest): Promise<Array<ValidatorRow>> {
        const response = await this.getValidatorsListRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetAccountBalanceChartFrameEnum {
    D = 'D'
}
/**
    * @export
    * @enum {string}
    */
export enum GetAccountsListSortColumnEnum {
    CreatedAt = 'created_at',
    GeneralBalance = 'general_balance',
    EscrowBalance = 'escrow_balance',
    EscrowShare = 'escrow_share',
    OperationsAmount = 'operations_amount'
}
/**
    * @export
    * @enum {string}
    */
export enum GetAccountsListSortSideEnum {
    Asc = 'asc',
    Desc = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum GetValidatorStatChartFrameEnum {
    D = 'D'
}
