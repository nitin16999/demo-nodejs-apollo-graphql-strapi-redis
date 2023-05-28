//utils
const NotFoundError = require('lib/not_found_error');

module.exports = {
  Query: {
    // resolver: (parent,args,context,info) <- options params
    // here '_' <- parent
    accounts: (_, __, context) => context.dataSources.accounts.get(),
    account: (_, { id }, context) =>
      context.dataSources.accounts.getById(id) || new NotFoundError(),
  }, // end Query

  // join resolvers
  Account: {
    employee: (_, __, context) =>
      context.dataSources.employees.getById(_.employee.id),
  },
};
