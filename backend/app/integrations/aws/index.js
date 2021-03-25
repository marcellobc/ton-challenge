const AWS = require('aws-sdk');

const { AWS_REGION } = process.env;

// use to set any global config
AWS.config.update({ region: AWS_REGION ?? 'us-east-1' });

module.exports = AWS;
