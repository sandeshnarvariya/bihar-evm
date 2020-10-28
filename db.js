const pgsql = {
  host: "ec2-3-210-255-177.compute-1.amazonaws.com",
  database: "d2l13ofsr38cki",
  user: "ijfqjmbvxowpel",
  password: "3665c94618c16daf4beda9fc24c33957205736c7cf04a1c23f753b5d4e5ccbf3",
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
