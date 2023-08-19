/**
 * Name Done - Auth Service
 * An authentication service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface UnauthorizedResponseDto { 
    /**
     * HTTP status code of the error
     */
    statusCode: number;
    /**
     * Short description of the error
     */
    message: string;
    /**
     * Error type
     */
    error: string;
}

