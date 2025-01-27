const fs = require("fs");
const { url } = require("inspector");

const headers = {
	"User-Agent":
		"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36",
	Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
	"Accept-Encoding": "gzip, deflate, br, zstd",
	"Accept-Language": "en-US,en;q=0.9",
	"Cache-Control": "max-age=0",
};

const currentRacesURL =
	"https://www.twinspires.com//adw/todays-tracks?affid=2800&sortOrder=nextUp&bm-verify=AAQAAAAJ_5xIwKwEnMkoqJ7FPqocBIFzE22YQkx5TZWMj2PpJw1Q0ZDzVwBRfCp-iSZ-JcXRlzMy3Hp8pIchmSOoDy4SHRyJKr-NwY9inELmhmLYqU42oCQjQF-KPrMCDsROvfK49W_MWDXn_NKQmrVjOxIKpdglbyDHrLDLAzMMCd90BrlM4z-QODrrRh3RkNZR5r7oJboD2v4mslNwv0BA4pkxI4-WtJhsjvv_wAVBRb4dP67WnwAPMG-6QhENg8wl7trf_C9-9eQ9MkSyOXc1mmi7CcLiClRAXSQhcUlCvYa_m015FFouyzmWB2w6n3zudHTB6RHqwJk4yV4HUZmeYggJwwbV";

const trackCodeList = [];

async function webScraping() {
	let data; // Declare the variable outside the try block

	try {
		const response = await fetch(currentRacesURL, {
			method: "GET",
			headers,
		});

		console.log(`Status Code: ${response.status}`);

		if (response.ok) {
			data = await response.json(); // Assign the value inside the try block
			// console.log(data);

			// Write the JSON data to a file
			// fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
			//     if (err) {
			//         console.error("Error writing to file", err);
			//     } else {
			//         console.log("JSON data saved to data.json");
			//     }
			// });
		} else {
			console.error("Failed to fetch data");
		}
	} catch (error) {
		console.error("Error:", error);
	}

	if (data) {
		// console.log(data);
		data.map((track) => {
			let trackCode = track.brisCode;
			trackCode = trackCode.toUpperCase();
			// console.log(`Track code:  ${trackCode}`);

			trackCodeList.push(trackCode);
		});
	}
	tBredData = data.filter((track) => track.type === "Thoroughbred");
	return tBredData; // Return data at the end of the function
}

async function getRaces() {
	const trackData = await webScraping();
	// console.log("Track Data: ", trackData);

	trackData.map((track) => {
		let track_Code = track.brisCode.toUpperCase();
		let track_Name = track.name;
		console.log(`Races at    ${track_Name}`);
		console.log(`Track code: ${track_Code}`);
		let races = track.races;
		races.forEach((race, index) => {
			let raceNumber = index + 1;

			const RaceObject = {
				raceNumber: raceNumber,
				trackCode: track_Code,
				raceURL: `https://www.twinspires.com/adw/todays-tracks/${track_Code}/Thoroughbred/races/${raceNumber}/entries?affid=2800&bm-verify=AAQAAAAJ_5xIwKwEnMkoqJ7FPqocBIFzE22YQkx5TZWMj2PpJw1Q0ZDzVwBRfCp-iSZ-JcXRlzMy3Hp8pIchmSOoDy4SHRyJKr-NwY9inELmhmLYqU42oCQjQF-KPrMCDsROvfK49W_MWDXn_NKQmrVjOxIKpdglbyDHrLDLAzMMCd90BrlM4z-QODrrRh3RkNZR5r7oJboD2v4mslNwv0BA4pkxI4-WtJhsjvv_wAVBRb4dP67WnwAPMG-6QhENg8wl7trf_C9-9eQ9MkSyOXc1mmi7CcLiClRAXSQhcUlCvYa_m015FFouyzmWB2w6n3zudHTB6RHqwJk4yV4HUZmeYggJwwbV`,
			};
			console.log(`\n Race ${RaceObject.raceNumber} AT ${RaceObject.trackCode} \n`);
			console.log(RaceObject.raceURL);

			// console.log(
			// 	`https://www.twinspires.com/adw/todays-tracks/${track_Code}/Thoroughbred/races/${index}/entries?affid=2800&bm-verify=AAQAAAAJ_5xIwKwEnMkoqJ7FPqocBIFzE22YQkx5TZWMj2PpJw1Q0ZDzVwBRfCp-iSZ-JcXRlzMy3Hp8pIchmSOoDy4SHRyJKr-NwY9inELmhmLYqU42oCQjQF-KPrMCDsROvfK49W_MWDXn_NKQmrVjOxIKpdglbyDHrLDLAzMMCd90BrlM4z-QODrrRh3RkNZR5r7oJboD2v4mslNwv0BA4pkxI4-WtJhsjvv_wAVBRb4dP67WnwAPMG-6QhENg8wl7trf_C9-9eQ9MkSyOXc1mmi7CcLiClRAXSQhcUlCvYa_m015FFouyzmWB2w6n3zudHTB6RHqwJk4yV4HUZmeYggJwwbV`

			// );
		});

		// console.log(races);
		let secondURL = `https://www.twinspires.com/adw/todays-tracks/${track_Code}/Thoroughbred/races/1/entries?affid=2800&bm-verify=AAQAAAAJ_5xIwKwEnMkoqJ7FPqocBIFzE22YQkx5TZWMj2PpJw1Q0ZDzVwBRfCp-iSZ-JcXRlzMy3Hp8pIchmSOoDy4SHRyJKr-NwY9inELmhmLYqU42oCQjQF-KPrMCDsROvfK49W_MWDXn_NKQmrVjOxIKpdglbyDHrLDLAzMMCd90BrlM4z-QODrrRh3RkNZR5r7oJboD2v4mslNwv0BA4pkxI4-WtJhsjvv_wAVBRb4dP67WnwAPMG-6QhENg8wl7trf_C9-9eQ9MkSyOXc1mmi7CcLiClRAXSQhcUlCvYa_m015FFouyzmWB2w6n3zudHTB6RHqwJk4yV4HUZmeYggJwwbV`;
		// console.log(secondURL);
	});
	// console.log(trackData);
}

getRaces();

// (async () => {
//     const trackData = await webScraping();
//     console.log(trackData);
// })();
