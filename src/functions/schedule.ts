const CronJob = require("node-cron");

const initScheduleJobs = () => {
	const scheduleFunction = CronJob.schedule("*/1 * * * *", () => {
		console.log("executed every minute");
	});
};

export { initScheduleJobs };
