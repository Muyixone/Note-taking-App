const app = require('./index');
const config = require('./config');
const connectToDb = require('./db');

connectToDb();

app.listen(config.PORT, () => {
  console.log(`Listening on http://${config.HOST}:${config.PORT}`);
});
