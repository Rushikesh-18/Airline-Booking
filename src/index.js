const express = require('express'); 
const { serverConfig ,loggerConfig} = require('./config'); 
const apiRoutes=require('./routes');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log(`Successfully started server on PORT: ${serverConfig.PORT}`);
  loggerConfig.info("Successfully started at the server",{} );

});