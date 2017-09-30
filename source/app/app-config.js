
'use strict';

/*-------------------------------------------------
    Source of this template in root directory
    environment/config.template.js
    this is only example which you may define any structure
---------------------------------------------------*/
angular
    /**
     * app configuration from enveronment
     */
    .module('app')

    .constant( 'config', {
    "initSourceMap": true,
    "timestamp": "2017-09-30T09:02:54.821Z",
    "version": "0.0.1",
    "baseUrl": "/",
    "production": false,
    "apiPath": "api/2",
    "object": {
        "number": 1,
        "array": [
            1,
            2,
            3
        ]
    },
    "array": [
        {
            "some": true,
            "else": "false"
        },
        {
            "some": 1,
            "else": "false"
        }
    ]
});
