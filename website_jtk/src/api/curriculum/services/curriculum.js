'use strict';

/**
 * curriculum service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::curriculum.curriculum');
