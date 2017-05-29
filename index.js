module.exports = function getRDSConnectionString(options) {
  let connectionString = null;

  if (process.env.RDS_HOSTNAME && process.env.RDS_USERNAME) {
    connectionString = `${
      process.env.RDS_USERNAME
      }:${
      process.env.RDS_PASSWORD
      }@${
      process.env.RDS_HOSTNAME
      }:${
      process.env.RDS_PORT
      }/${
      process.env.RDS_DB_NAME
      }`;

    if (options && options.scheme) {
      connectionString = `${options.scheme}://${connectionString}`;
    }
  }

  return connectionString;
};
