const express = require('express'); // Use require to import Express
const { serverConfig ,loggerConfig} = require('./config'); // Use require to import the config
const apiRoutes=require('./routes');
const app = express();

app.use('/api',apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log(`Successfully started server on PORT: ${serverConfig.PORT}`);
  loggerConfig.info("Successfully started at the server",{} );

});