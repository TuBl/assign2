const functions = require("./index");
test("Takes id, returns failed luanches for that launchpad", () => {
	return functions.getFailedLaunches("5e9e4502f5090995de566f86").then((data) =>
		expect(data).toMatchObject({
			launchpad: "Kwajalein Atoll",
			all_failures: [
				{
					name: "FalconSat",
					failures: ["merlin engine failure"],
				},
				{
					name: "DemoSat",
					failures: [
						"harmonic oscillation leading to premature engine shutdown",
					],
				},

				{
					name: "Trailblazer",
					failures: [
						"residual stage-1 thrust led to collision between stage 1 and stage 2",
					],
				},
			],
		})
	);
});
test("Takes Year in YYYY format and returns satallites with matching Launch Year", () => {
	return functions.getStarLinkSatellites("2018").then((data) => {
		expect(data).toStrictEqual([
			{ id: "5eed770f096e590006985616", launch: "5eb87d14ffd86e000604b361" },
			{ id: "5eed770f096e590006985617", launch: "5eb87d14ffd86e000604b361" },
		]);
	});
});

test("Takes Date in ISO format YYYY-MM-DD and returns satallites with matching Launch date", () => {
	return functions.getStarLinkSatellites("2019-05-24").then((data) => {
		expect(data).toStrictEqual([
			{ id: "5eed770f096e59000698560d", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e59000698560e", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e59000698560f", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985610", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985611", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985612", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985613", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985614", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985615", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985618", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985619", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e59000698561a", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7713096e59000698561b", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698561c", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698561d", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698561e", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698561f", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985620", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985621", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985622", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985623", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985624", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985625", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985626", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985627", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985628", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985629", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698562a", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698562b", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698562c", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698562d", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698562e", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698562f", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985630", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985631", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985632", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985633", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985634", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985635", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985636", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985637", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985638", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985639", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698563a", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698563b", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698563c", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698563d", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698563e", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698563f", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985640", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985641", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985643", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985644", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985645", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985646", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985647", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985649", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698564a", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698564c", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eefa85e6527ee0006dcee24", launch: "5eb87d30ffd86e000604b378" },
		]);
	});
});

test("Takes Month in Full alphabetical (January) format and returns satallites with matching Launch Month", () => {
	return functions.getStarLinkSatellites("May").then((data) => {
		expect(data).toStrictEqual([
			{ id: "5eed770f096e59000698560d", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e59000698560e", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e59000698560f", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985610", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985611", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985612", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985613", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985614", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985615", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985618", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e590006985619", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed770f096e59000698561a", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7713096e59000698561b", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698561c", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698561d", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698561e", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698561f", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985620", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985621", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985622", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985623", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985624", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985625", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985626", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985627", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985628", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985629", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698562a", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698562b", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698562c", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698562d", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698562e", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698562f", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985630", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985631", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985632", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985633", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985634", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985635", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985636", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985637", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985638", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985639", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698563a", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698563b", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698563c", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698563d", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698563e", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698563f", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985640", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985641", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985643", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985644", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985645", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985646", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985647", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e590006985649", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698564a", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eed7714096e59000698564c", launch: "5eb87d30ffd86e000604b378" },
			{ id: "5eefa85e6527ee0006dcee24", launch: "5eb87d30ffd86e000604b378" },
		]);
	});
});
