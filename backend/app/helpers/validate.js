const ExceptionHelper = require('./ExceptionHelper');

async function validate(obj, schema) {
  const { error, value } = await schema.validate(obj, { abortEarly: false });
  if (error) ExceptionHelper.badRequest('validation fields', error.details);
  return value;
}

module.exports = validate;
