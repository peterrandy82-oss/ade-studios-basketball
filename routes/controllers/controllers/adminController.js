/**
 * Admin controller (Stage 1: Foundation)
 * Authentication is implemented in Stage 3.
 */

exports.getDashboard = (req, res) => {
  res.render('admin/dashboard', {
    title: 'ADE STUDIOS — Admin Dashboard',
  });
};
