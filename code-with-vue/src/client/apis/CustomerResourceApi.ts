/* tslint:disable */
/* eslint-disable */
/**
 * code-with-quarkus API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Customer,
  Invoice,
  InvoiceUpdate,
} from '../models/index';
import {
    CustomerFromJSON,
    CustomerToJSON,
    InvoiceFromJSON,
    InvoiceToJSON,
    InvoiceUpdateFromJSON,
    InvoiceUpdateToJSON,
} from '../models/index';

export interface ApiCustomersCustomerIdInvoicesGetRequest {
    customerId: number;
}

export interface ApiCustomersCustomerIdInvoicesPostRequest {
    customerId: number;
    invoiceUpdate: InvoiceUpdate;
}

export interface ApiCustomersPostRequest {
    customer: Customer;
}

/**
 * 
 */
export class CustomerResourceApi extends runtime.BaseAPI {

    /**
     * Invoices
     */
    async apiCustomersCustomerIdInvoicesGetRaw(requestParameters: ApiCustomersCustomerIdInvoicesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Invoice>>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling apiCustomersCustomerIdInvoicesGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/customers/{customer_id}/invoices`.replace(`{${"customer_id"}}`, encodeURIComponent(String(requestParameters['customerId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InvoiceFromJSON));
    }

    /**
     * Invoices
     */
    async apiCustomersCustomerIdInvoicesGet(requestParameters: ApiCustomersCustomerIdInvoicesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Invoice>> {
        const response = await this.apiCustomersCustomerIdInvoicesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Invoice Create
     */
    async apiCustomersCustomerIdInvoicesPostRaw(requestParameters: ApiCustomersCustomerIdInvoicesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling apiCustomersCustomerIdInvoicesPost().'
            );
        }

        if (requestParameters['invoiceUpdate'] == null) {
            throw new runtime.RequiredError(
                'invoiceUpdate',
                'Required parameter "invoiceUpdate" was null or undefined when calling apiCustomersCustomerIdInvoicesPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/customers/{customer_id}/invoices`.replace(`{${"customer_id"}}`, encodeURIComponent(String(requestParameters['customerId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceUpdateToJSON(requestParameters['invoiceUpdate']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Invoice Create
     */
    async apiCustomersCustomerIdInvoicesPost(requestParameters: ApiCustomersCustomerIdInvoicesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiCustomersCustomerIdInvoicesPostRaw(requestParameters, initOverrides);
    }

    /**
     * List
     */
    async apiCustomersGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Customer>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/customers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CustomerFromJSON));
    }

    /**
     * List
     */
    async apiCustomersGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Customer>> {
        const response = await this.apiCustomersGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Create
     */
    async apiCustomersPostRaw(requestParameters: ApiCustomersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['customer'] == null) {
            throw new runtime.RequiredError(
                'customer',
                'Required parameter "customer" was null or undefined when calling apiCustomersPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/customers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerToJSON(requestParameters['customer']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create
     */
    async apiCustomersPost(requestParameters: ApiCustomersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiCustomersPostRaw(requestParameters, initOverrides);
    }

}