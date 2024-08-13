const express = require('express');
		const app = express();
		// Define the port to run the server on
		const port = 3000;

		// Define a route handler for the default home page
		app.get('/', (req, res) => {
		  res.send('Hello World!');
		});

		// Start the server
		app.listen(port, () => {
 		 console.log(`App is running on http://localhost:${port}`);
		});

