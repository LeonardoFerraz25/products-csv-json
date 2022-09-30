require('dotenv').config();
const app = require('./app');
const port = process.env.NODE_PORT || 3001;

app.listen(port, () => console.log(`server running on port ${port}!`));