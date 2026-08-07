/**
 * ADE STUDIOS — Basketball Predictions Platform
 * Server entry point (Stage 1: Foundation)
 *
 * NOTE: MongoDB is intentionally NOT connected at this stage (Stage 2).
 */

require('dotenv').config();

const path = require('path');
const express = require('express');
const helmet = require('helmet');

const publicRoutes = require('./routes/public');
const adminRoutes = require('./routes/admin');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Behind Render's proxy in production (required later for secure cookies)
if (NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Security headers
app.use(helmet());

// Body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets
app.use(express.static(path.join(__dirname, 'public')));

// Expose environment to all views
app.use((req, res, next) => {
  res.locals.nodeEnv = NODE_ENV;
  next();
});

// Routes
app.use('/', publicRoutes);
app.use('/admin', adminRoutes);

// 404 + centralized error handling (must come last)
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`ADE STUDIOS server running at http://localhost:${PORT} [${NODE_ENV}]`);
});
