const { BaseDS } = require('./base');

class EmployeeDS extends BaseDS {
  constructor(taskOpts) {
    super(taskOpts);
  }

  async getByDepId(depId, params = {}) {
    var cacheKey = params ? JSON.stringify(params) : 'noparams';
    cacheKey = `department:${this.cacheKeyBase}:${cacheKey}`;

    const cacheDoc = await this.cache.get(cacheKey);
    if (cacheDoc) {
      return JSON.parse(cacheDoc);
    }

    const doc = await this.service.get({
      ...params,
      'department.id': depId,
    });

    this.cache.set(cacheKey, JSON.stringify(doc), { ttl: 3 });

    return doc;
  }
}

exports.EmployeeDS = EmployeeDS;
