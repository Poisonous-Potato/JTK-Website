'use strict';

/**
 * agenda-nonlisted service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::agenda-nonlisted.agenda-nonlisted');
