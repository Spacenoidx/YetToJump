const fs = require("fs");

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
	try {
		const response = await fetch(currentRacesURL, {
			method: "GET",
			headers,
		});

		console.log(`Status Code: ${response.status}`);

		if (response.ok) {
			const data = await response.json();
			// console.log(data);
			return data;

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
		const trackCode = data.brisCode.toUpperCase();
		trackCodeList.push(trackCode);
		console.log(`Track code:  ${trackCode}`);
	}

	return data; // Return data at the end of the function
}

webScraping();
