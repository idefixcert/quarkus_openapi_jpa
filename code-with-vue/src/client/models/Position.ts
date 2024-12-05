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

import { mapValues } from '../runtime';
import type { Invoice } from './Invoice';
import {
    InvoiceFromJSON,
    InvoiceFromJSONTyped,
    InvoiceToJSON,
} from './Invoice';
import type { Tax } from './Tax';
import {
    TaxFromJSON,
    TaxFromJSONTyped,
    TaxToJSON,
} from './Tax';

/**
 * 
 * @export
 * @interface Position
 */
export interface Position {
    /**
     * 
     * @type {number}
     * @memberof Position
     */
    id?: number;
    /**
     * 
     * @type {Invoice}
     * @memberof Position
     */
    invoice?: Invoice;
    /**
     * 
     * @type {string}
     * @memberof Position
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof Position
     */
    count?: string;
    /**
     * 
     * @type {string}
     * @memberof Position
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof Position
     */
    pricePerUnit?: number;
    /**
     * 
     * @type {number}
     * @memberof Position
     */
    amount?: number;
    /**
     * 
     * @type {Tax}
     * @memberof Position
     */
    tax?: Tax;
}

/**
 * Check if a given object implements the Position interface.
 */
export function instanceOfPosition(value: object): value is Position {
    return true;
}

export function PositionFromJSON(json: any): Position {
    return PositionFromJSONTyped(json, false);
}

export function PositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Position {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'invoice': json['invoice'] == null ? undefined : InvoiceFromJSON(json['invoice']),
        'text': json['text'] == null ? undefined : json['text'],
        'count': json['count'] == null ? undefined : json['count'],
        'unit': json['unit'] == null ? undefined : json['unit'],
        'pricePerUnit': json['price_per_unit'] == null ? undefined : json['price_per_unit'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'tax': json['tax'] == null ? undefined : TaxFromJSON(json['tax']),
    };
}

export function PositionToJSON(value?: Position | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'invoice': InvoiceToJSON(value['invoice']),
        'text': value['text'],
        'count': value['count'],
        'unit': value['unit'],
        'price_per_unit': value['pricePerUnit'],
        'amount': value['amount'],
        'tax': TaxToJSON(value['tax']),
    };
}
