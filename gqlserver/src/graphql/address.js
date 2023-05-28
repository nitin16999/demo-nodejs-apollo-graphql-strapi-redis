//utils
const NotFoundError = require('lib/not_found_error');

module.exports = {
  Query: {
    // resolver: (parent,args,context,info) <- options params
    // here '_' <- parent
    addresses: (_, __, context) => context.dataSources.addresses.get(),
    address: (_, { id }, context) =>
      context.dataSources.addresses.getById(id) || new NotFoundError(),
  }, // end Query

  // join resolvers
  Address: {
    employee: (_, __, context) =>
      context.dataSources.employees.getById(_.employee.id),
  },
};
