const express = require("express");
import { initScheduleJobs } from "./functions/schedule";
const app = express();
const port = process.env.PORT || 3000;

initScheduleJobs();

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
