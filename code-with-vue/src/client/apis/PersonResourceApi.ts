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
  Dog,
  Person,
} from '../models/index';
import {
    DogFromJSON,
    DogToJSON,
    PersonFromJSON,
    PersonToJSON,
} from '../models/index';

export interface PersonsIdDeleteRequest {
    id: number;
}

export interface PersonsIdGetRequest {
    id: number;
}

export interface PersonsIdPutRequest {
    id: number;
    person: Person;
}

export interface PersonsPersonIdDogsGetRequest {
    personId: number;
}

export interface PersonsPersonIdDogsIdGetRequest {
    id: number;
    personId: number;
}

export interface PersonsPersonIdDogsPostRequest {
    personId: number;
    dog: Dog;
}

export interface PersonsPostRequest {
    person: Person;
}

export interface PersonsSearchGetRequest {
    name?: string;
}

export interface PersonsSearchNameGetRequest {
    name: string;
}

/**
 * 
 */
export class PersonResourceApi extends runtime.BaseAPI {

    /**
     * Count
     */
    async personsCountGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/persons/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Count
     */
    async personsCountGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.personsCountGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * List
     */
    async personsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Person>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/persons`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PersonFromJSON));
    }

    /**
     * List
     */
    async personsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Person>> {
        const response = await this.personsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Delete
     */
    async personsIdDeleteRaw(requestParameters: PersonsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling personsIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/persons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete
     */
    async personsIdDelete(requestParameters: PersonsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.personsIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Get
     */
    async personsIdGetRaw(requestParameters: PersonsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Person>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling personsIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/persons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonFromJSON(jsonValue));
    }

    /**
     * Get
     */
    async personsIdGet(requestParameters: PersonsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Person> {
        const response = await this.personsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update
     */
    async personsIdPutRaw(requestParameters: PersonsIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Person>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling personsIdPut().'
            );
        }

        if (requestParameters['person'] == null) {
            throw new runtime.RequiredError(
                'person',
                'Required parameter "person" was null or undefined when calling personsIdPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/persons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PersonToJSON(requestParameters['person']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonFromJSON(jsonValue));
    }

    /**
     * Update
     */
    async personsIdPut(requestParameters: PersonsIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Person> {
        const response = await this.personsIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Dogs
     */
    async personsPersonIdDogsGetRaw(requestParameters: PersonsPersonIdDogsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Dog>>> {
        if (requestParameters['personId'] == null) {
            throw new runtime.RequiredError(
                'personId',
                'Required parameter "personId" was null or undefined when calling personsPersonIdDogsGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/persons/{person_id}/dogs`.replace(`{${"person_id"}}`, encodeURIComponent(String(requestParameters['personId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DogFromJSON));
    }

    /**
     * Get Dogs
     */
    async personsPersonIdDogsGet(requestParameters: PersonsPersonIdDogsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Dog>> {
        const response = await this.personsPersonIdDogsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Dog
     */
    async personsPersonIdDogsIdGetRaw(requestParameters: PersonsPersonIdDogsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Dog>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling personsPersonIdDogsIdGet().'
            );
        }

        if (requestParameters['personId'] == null) {
            throw new runtime.RequiredError(
                'personId',
                'Required parameter "personId" was null or undefined when calling personsPersonIdDogsIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/persons/{person_id}/dogs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"person_id"}}`, encodeURIComponent(String(requestParameters['personId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DogFromJSON(jsonValue));
    }

    /**
     * Get Dog
     */
    async personsPersonIdDogsIdGet(requestParameters: PersonsPersonIdDogsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Dog> {
        const response = await this.personsPersonIdDogsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create
     */
    async personsPersonIdDogsPostRaw(requestParameters: PersonsPersonIdDogsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['personId'] == null) {
            throw new runtime.RequiredError(
                'personId',
                'Required parameter "personId" was null or undefined when calling personsPersonIdDogsPost().'
            );
        }

        if (requestParameters['dog'] == null) {
            throw new runtime.RequiredError(
                'dog',
                'Required parameter "dog" was null or undefined when calling personsPersonIdDogsPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/persons/{person_id}/dogs`.replace(`{${"person_id"}}`, encodeURIComponent(String(requestParameters['personId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DogToJSON(requestParameters['dog']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create
     */
    async personsPersonIdDogsPost(requestParameters: PersonsPersonIdDogsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.personsPersonIdDogsPostRaw(requestParameters, initOverrides);
    }

    /**
     * Create
     */
    async personsPostRaw(requestParameters: PersonsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['person'] == null) {
            throw new runtime.RequiredError(
                'person',
                'Required parameter "person" was null or undefined when calling personsPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/persons`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PersonToJSON(requestParameters['person']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create
     */
    async personsPost(requestParameters: PersonsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.personsPostRaw(requestParameters, initOverrides);
    }

    /**
     * Search All
     */
    async personsSearchGetRaw(requestParameters: PersonsSearchGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Person>>> {
        const queryParameters: any = {};

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/persons/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PersonFromJSON));
    }

    /**
     * Search All
     */
    async personsSearchGet(requestParameters: PersonsSearchGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Person>> {
        const response = await this.personsSearchGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search
     */
    async personsSearchNameGetRaw(requestParameters: PersonsSearchNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Person>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling personsSearchNameGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/persons/search/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonFromJSON(jsonValue));
    }

    /**
     * Search
     */
    async personsSearchNameGet(requestParameters: PersonsSearchNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Person> {
        const response = await this.personsSearchNameGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}