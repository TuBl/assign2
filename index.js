let id = "5e9e4502f5090995de566f86";
// Function takes in a launchpadId and replies with information about failed launches
const getFailedLaunches = async (launchpadId) => {
	//get the launchpad data
	const launchpad = await axios.get(
		`https://api.spacexdata.com/v4/launchpads/${launchpadId}`
	);
	//get the launches id (Array of strings) from launchpad response
	let launchesIds = launchpad.data.launches;
	// Make request to get the data for each launch
	let launchesData = launchesIds.map(async (launchId) => {
		const launches = await axios.get(
			`https://api.spacexdata.com/v4/launches/${launchId}`
		);
		return launches.data;
	});
	//Wait for all the launches data to resolve
	launchesData = await Promise.all(launchesData);
	// Filter where the failures array length is 0 (No failures)
	// Then we use map to return the failurse in our desired format
	let failures = launchesData
		.filter((e) => {
			return e.failures.length > 0;
		})
		.map((e) => {
			return {
				name: e.name,
				failures: e.failures,
			};
		});
	return {
		launchpad: launchpad.data.name,
		all_failures: failures,
	};
};

// getFailedLaunches(id);

const months = {
	January: "01",
	February: "02",
	March: "03",
	April: "04",
	May: "05",
	June: "06",
	July: "07",
	August: "08",
	September: "09",
	October: "10",
	November: "11",
	December: "12",
};

const getStarLinkSatellites = async (query) => {
	const satallites = await axios.get("https://api.spacexdata.com/v4/starlink");
	if (query == "") {
		return satallites.data;
	} else {
		//query is a date (ISO format or YYYY)
		if (moment(query)._d != "Invalid Date") {
			// If query format is YYYY (Year) search by year
			// else compare ISO date
			return moment(query)._f === "YYYY"
				? satallites.data.filter((satallite) => {
						return satallite.spaceTrack.LAUNCH_DATE.split("-")[0] == query;
				  })
				: satallites.data.filter((satallite) => {
						return satallite.spaceTrack.LAUNCH_DATE == query;
				  });
		} else {
			return satallites.data.filter((satallite) => {
				return satallite.spaceTrack.LAUNCH_DATE.split("-")[1] == months[query];
			});
		}
	}
};

// getStarLinkSatellites("2019-05-24");
// getStarLinkSatellites("2019-05-24");
// getStarLinkSatellites("June");
getStarLinkSatellites("2018");
// console.log();
