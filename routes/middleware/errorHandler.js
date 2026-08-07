/**
 * Centralized error handling (Stage 1)
 */

const NODE_ENV = process.env.NODE_ENV || 'development';

// 404 — no route matched
function notFoundHandler(req, res) {
  res.status(404).render('error', {
    title: 'Page Not Found',
    statusCode: 404,
    message: 'The page you are looking for does not exist.',
    stack: null,
  });
}

// Central error handler — last middleware in the chain
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  // Log full error server-side in all environments
  console.error(err);

  res.status(statusCode).render('error', {
    title: 'Something Went Wrong',
    statusCode,
    message:
      NODE_ENV === 'development'
        ? err.message
        : 'An unexpected error occurred. Please try again later.',
    // Never expose stack traces in production
    stack: NODE_ENV === 'development' ? err.stack : null,
  });
}

module.exports = { notFoundHandler, errorHandler };
