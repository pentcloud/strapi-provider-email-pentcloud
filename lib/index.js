'use strict'

const { removeUndefined } = require('strapi-utils')
const fetch = require('node-fetch')

module.exports = {
    init: (providerOptions = {}, settings = {}) => {
        return {
            send: (options) => {
                return new Promise((resolve, reject) => {
                    const {
                        nameFrom,
                        emailFrom,
                        to,
                        cc,
                        bcc,
                        replyTo,
                        subject,
                        text,
                        html,
                        attachments,
                    } = options

                    let msg = {
                        from: {
                            name: nameFrom || settings.defaultNameFrom,
                            email: emailFrom || settings.defaultEmailFrom,
                        },
                        to,
                        cc,
                        bcc,
                        subject,
                        text,
                        html,
                        attachments,
                    }

                    const requestOptions = {
                        method: providerOptions.method,
                        headers: providerOptions.headers || null,
                        body: JSON.stringify(removeUndefined(msg)),
                    }

                    fetch(providerOptions.url, removeUndefined(requestOptions))
                        .then((res) => res.json())
                        .then((json) => {
                            if (
                                json.statusCode < 200 &&
                                json.statusCode >= 300
                            ) {
                                reject(json)
                            } else {
                                resolve(json)
                            }
                        })
                        .catch((err) => {
                            reject(err)
                        })
                })
            },
        }
    },
}
