# strapi-provider-email-sendmail

## Prerequisites

You need to have the plugin `strapi-plugin-email` installed in you Strapi project.

## Installation

```bash
# using npm
npm install @pentcloud/strapi-provider-email-ses --save
```

## Configuration

| Variable                | Type                    | Description                                                                                                              | Required | Default   |
| ----------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------- | --------- |
| provider                | string                  | The name of the provider you use                                                                                         | yes      |           |
| providerOptions         | object                  | Will be directly given to `require('sendmail')`. Please refer to [sendmail](https://www.npmjs.com/package/sendmail) doc. | no       | {}        |
| settings                | object                  | Settings                                                                                                                 | no       | {}        |
| settings.defaultFrom    | string                  | Default sender mail address                                                                                              | no       | undefined |
| settings.defaultReplyTo | string \| array<string> | Default address or addresses the receiver is asked to reply to                                                           | no       | undefined |

### Example

**Path -** `config/plugins.js`

```js
module.exports = ({ env }) => ({
    // ...
    email: {
        provider: 'pentcloud',
        providerOptions: {
            method: 'POST',
            url: 'https://domain.com/v1/mail/ses/send',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            },
        },
        settings: {
            defaultNameFrom: 'APP_NAME',
            defaultEmailFrom: 'no-reply@APP_NAME.com',
        },
    },
    // ...
})
```
