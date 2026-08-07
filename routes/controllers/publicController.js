/**
 * Public controller (Stage 1: Foundation)
 */

exports.getHome = (req, res) => {
  res.render('index', {
    title: 'ADE STUDIOS — Basketball Predictions',
  });
};
