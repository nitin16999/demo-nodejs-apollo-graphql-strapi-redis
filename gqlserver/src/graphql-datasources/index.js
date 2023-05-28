const { BaseDS } = require('./base');
const { EmployeeDS } = require('./employee');
const { TaskDS } = require('./task');
const { AccountDS } = require('./account');
const { AddressDS } = require('./address');
const Strapi = require('lib/strapi');

module.exports = () => {
  return {
    departments: new BaseDS({
      service: new Strapi('departments'),
      cacheKeyBase: 'departments',
    }),
    employees: new EmployeeDS({
      service: new Strapi('employees'),
      cacheKeyBase: 'employees',
    }),
    tasks: new TaskDS({
      service: new Strapi('tasks'),
      cacheKeyBase: 'tasks',
    }),
    accounts: new AccountDS({
      service: new Strapi('accounts'),
      cacheKeyBase: 'accounts',
    }),
    addresses: new AddressDS({
      service: new Strapi('addresses'),
      cacheKeyBase: 'addresses',
    }),
  };
};
