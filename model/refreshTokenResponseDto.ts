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


export interface RefreshTokenResponseDto { 
    /**
     * The ID token for the user
     */
    idToken: string;
    /**
     * The access token for the user
     */
    accessToken: string;
}

