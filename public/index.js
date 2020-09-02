// const axios = require("axios");
// const moment = require("moment");
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

const functions = {
	// Function takes in a launchpadId and replies with information about failed launches
	// getFailedLaunches(id);
	getFailedLaunches: async (launchpadId) => {
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
	},
	getStarLinkSatellites: async (query) => {
		const satallites = await axios.get(
			"https://api.spacexdata.com/v4/starlink"
		);
		if (query == "") {
			return satallites.data;
		} else {
			//query is a date (ISO format or YYYY)
			if (moment(query)._d != "Invalid Date") {
				// If query format is YYYY (Year) search by year
				// else compare ISO date
				return moment(query)._f === "YYYY"
					? satallites.data
							.filter((satallite) => {
								return satallite.spaceTrack.LAUNCH_DATE.split("-")[0] == query;
							})
							.map((e) => {
								return {
									id: e.id,
									launch: e.launch,
								};
							})
					: satallites.data
							.filter((satallite) => {
								return satallite.spaceTrack.LAUNCH_DATE == query;
							})
							.map((e) => {
								return {
									id: e.id,
									launch: e.launch,
								};
							});
			} else {
				return satallites.data
					.filter((satallite) => {
						return (
							satallite.spaceTrack.LAUNCH_DATE.split("-")[1] == months[query]
						);
					})
					.map((e) => {
						return {
							id: e.id,
							launch: e.launch,
						};
					});
			}
		}
	},
};

document.getElementById("btn1").onclick = function () {
	document.getElementById("failures").innerHTML = "";
	functions.getFailedLaunches("5e9e4502f5090995de566f86").then((res) => {
		document.getElementById("launchpad").innerHTML = res.launchpad;
		res.all_failures.forEach((failure) => {
			let node = document.createElement("li");
			node.innerHTML = `${failure.name} - ${failure.failures}`;
			document.getElementById("failures").appendChild(node);
		});
	});
};
document.getElementById("btn2").onclick = function () {
	document.getElementById("satellites1").innerHTML = "";
	functions
		.getStarLinkSatellites(document.getElementById("myDate").value)
		.then((res) => {
			if (res.length > 0) {
				res.forEach((satellite) => {
					let node = document.createElement("li");
					node.innerHTML = `satellite_id :${satellite.id} - launch_id: ${satellite.launch}`;
					document.getElementById("satellites1").appendChild(node);
				});
			} else {
				let node = document.createElement("li");
				let nodeText = document.createTextNode("No match found");
				node.appendChild(nodeText);
				document.getElementById("satellites1").appendChild(node);
			}
		});
};

document.getElementById("btn3").onclick = function () {
	document.getElementById("satellites2").innerHTML = "";
	functions
		.getStarLinkSatellites(document.getElementById("yyyy").value)
		.then((res) => {
			if (res.length > 0) {
				res.forEach((satellite) => {
					let node = document.createElement("li");
					node.innerHTML = `satellite_id :${satellite.id} - launch_id: ${satellite.launch}`;
					document.getElementById("satellites2").appendChild(node);
				});
			} else {
				let node = document.createElement("li");
				let nodeText = document.createTextNode("No match found");
				node.appendChild(nodeText);
				document.getElementById("satellites2").appendChild(node);
			}
		});
};
document.getElementById("btn4").onclick = function () {
	document.getElementById("satellites3").innerHTML = "";
	functions
		.getStarLinkSatellites(document.getElementById("month").value)
		.then((res) => {
			if (res.length > 0) {
				res.forEach((satellite) => {
					let node = document.createElement("li");
					node.innerHTML = `satellite_id :${satellite.id} - launch_id: ${satellite.launch}`;
					document.getElementById("satellites3").appendChild(node);
				});
			} else {
				let node = document.createElement("li");
				let nodeText = document.createTextNode("No match found");
				node.appendChild(nodeText);
				document.getElementById("satellites3").appendChild(node);
			}
		});
};
module.exports = functions;
