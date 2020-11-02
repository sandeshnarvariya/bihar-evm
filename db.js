const pgsql = {
  host: "ec2-54-156-53-71.compute-1.amazonaws.com",
  database: "d1ao9f6ullipip",
  user: "owdauyrbdhaber",
  password: "1de63448be0486b8e9389e8e9637aeb7ce1ef0cfc4a8043966b9b98a7c600d38",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 20,
  min: 4,
  idleTimeoutMillis: 100000,
  connectionTimeoutMillis: 100000,
};

module.exports = {
  pgsql,
};
