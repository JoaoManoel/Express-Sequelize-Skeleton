const app = require('./app.js');
const consign = require('consign');

consign({cwd: 'src'})
  .include('db.js')
  .then('config.js')
  .then('views')
  .then('helpers')
  .then('controllers')
  .into(app);

app.db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 2023);
});
