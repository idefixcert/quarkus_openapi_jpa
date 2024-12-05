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
import type { Customer } from './Customer';
import {
    CustomerFromJSON,
    CustomerFromJSONTyped,
    CustomerToJSON,
} from './Customer';
import type { Position } from './Position';
import {
    PositionFromJSON,
    PositionFromJSONTyped,
    PositionToJSON,
} from './Position';
import type { Tax } from './Tax';
import {
    TaxFromJSON,
    TaxFromJSONTyped,
    TaxToJSON,
} from './Tax';

/**
 * 
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     * 
     * @type {number}
     * @memberof Invoice
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    identifier?: string;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    locale?: string;
    /**
     * 
     * @type {Date}
     * @memberof Invoice
     */
    date?: Date;
    /**
     * 
     * @type {number}
     * @memberof Invoice
     */
    amount?: number;
    /**
     * 
     * @type {Array<Tax>}
     * @memberof Invoice
     */
    taxes?: Array<Tax>;
    /**
     * 
     * @type {Customer}
     * @memberof Invoice
     */
    customer?: Customer;
    /**
     * 
     * @type {Array<Position>}
     * @memberof Invoice
     */
    positions?: Array<Position>;
}

/**
 * Check if a given object implements the Invoice interface.
 */
export function instanceOfInvoice(value: object): value is Invoice {
    return true;
}

export function InvoiceFromJSON(json: any): Invoice {
    return InvoiceFromJSONTyped(json, false);
}

export function InvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Invoice {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'identifier': json['identifier'] == null ? undefined : json['identifier'],
        'text': json['text'] == null ? undefined : json['text'],
        'locale': json['locale'] == null ? undefined : json['locale'],
        'date': json['date'] == null ? undefined : (new Date(json['date'])),
        'amount': json['amount'] == null ? undefined : json['amount'],
        'taxes': json['taxes'] == null ? undefined : ((json['taxes'] as Array<any>).map(TaxFromJSON)),
        'customer': json['customer'] == null ? undefined : CustomerFromJSON(json['customer']),
        'positions': json['positions'] == null ? undefined : ((json['positions'] as Array<any>).map(PositionFromJSON)),
    };
}

export function InvoiceToJSON(value?: Invoice | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'identifier': value['identifier'],
        'text': value['text'],
        'locale': value['locale'],
        'date': value['date'] == null ? undefined : ((value['date']).toISOString().substring(0,10)),
        'amount': value['amount'],
        'taxes': value['taxes'] == null ? undefined : ((value['taxes'] as Array<any>).map(TaxToJSON)),
        'customer': CustomerToJSON(value['customer']),
        'positions': value['positions'] == null ? undefined : ((value['positions'] as Array<any>).map(PositionToJSON)),
    };
}

