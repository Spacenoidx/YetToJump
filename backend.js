const fs = require("fs");

async function getTracks() {
	const url =
		"https://www.twinspires.com//adw/todays-tracks?affid=2800&sortOrder=nextUp&bm-verify=AAQAAAAJ_5xIwKwEnMkoqJ7FPqocBIFzE22YQkx5TZWMj2PpJw1Q0ZDzVwBRfCp-iSZ-JcXRlzMy3Hp8pIchmSOoDy4SHRyJKr-NwY9inELmhmLYqU42oCQjQF-KPrMCDsROvfK49W_MWDXn_NKQmrVjOxIKpdglbyDHrLDLAzMMCd90BrlM4z-QODrrRh3RkNZR5r7oJboD2v4mslNwv0BA4pkxI4-WtJhsjvv_wAVBRb4dP67WnwAPMG-6QhENg8wl7trf_C9-9eQ9MkSyOXc1mmi7CcLiClRAXSQhcUlCvYa_m015FFouyzmWB2w6n3zudHTB6RHqwJk4yV4HUZmeYggJwwbV";

	const headers = {
		"User-Agent":
			"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36",
		Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
		"Accept-Encoding": "gzip, deflate, br, zstd",
		"Accept-Language": "en-US,en;q=0.9",
		"Cache-Control": "max-age=0",
	};

	try {
		const response = await fetch(url, {
			method: "GET",
			headers,
		});

		console.log(`Status Code: ${response.status}`);

		if (response.ok) {
			const data = await response.json();
			// const trackCodeList = [];

			// data.map((track) => {
			// 	let trackCode = track.brisCode;
			// 	trackCode = trackCode.toUpperCase();
			// 	console.log(`Track code:  ${trackCode}`);

			// 	trackCodeList.push(trackCode);
			// });

			// console.log(data);
			return data;
		} else {
			console.error("Failed to fetch data");
		}
	} catch (error) {
		console.error("Error:", error);
	}
}

// async function getRaces() {

const headers = {
	"User-Agent":
		"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36",
	Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
	"Accept-Encoding": "gzip, deflate, br, zstd",
	"Accept-Language": "en-US,en;q=0.9",
	"Cache-Control": "max-age=0",
};

// 	const URL = "https://www.twinspires.com/adw/todays-tracks/{track_code}/Thoroughbred/races/{number}/entries?affid=2800&bm-verify=AAQAAAAJ_5xIwKwEnMkoqJ7FPqocBIFzE22YQkx5TZWMj2PpJw1Q0ZDzVwBRfCp-iSZ-JcXRlzMy3Hp8pIchmSOoDy4SHRyJKr-NwY9inELmhmLYqU42oCQjQF-KPrMCDsROvfK49W_MWDXn_NKQmrVjOxIKpdglbyDHrLDLAzMMCd90BrlM4z-QODrrRh3RkNZR5r7oJboD2v4mslNwv0BA4pkxI4-WtJhsjvv_wAVBRb4dP67WnwAPMG-6QhENg8wl7trf_C9-9eQ9MkSyOXc1mmi7CcLiClRAXSQhcUlCvYa_m015FFouyzmWB2w6n3zudHTB6RHqwJk4yV4HUZmeYggJwwbV";
// }

async function main() {
	const trackCodeList = [];
	const trackData = await getTracks();

	// trackData.map((track) => {
	// 	let trackCode = track.brisCode;
	// 	trackCode = trackCode.toUpperCase();
	// 	console.log(`Track code:  ${trackCode}`);

	// 	trackCodeList.push(trackCode);
	// });

	async function getRaces(trackData) {
		const headers = {
			"User-Agent":
				"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36",
			Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
			"Accept-Encoding": "gzip, deflate, br, zstd",
			"Accept-Language": "en-US,en;q=0.9",
			"Cache-Control": "max-age=0",
		};

		const trackCodeList = [];
		const urls = trackData.map((track) => {
			let trackCode = track.brisCode.toUpperCase();
			console.log(`Track code:  ${trackCode}`);
			const number = 2;
			const URL = `https://www.twinspires.com/adw/todays-tracks/${trackCode}/Thoroughbred/races/${number}/entries?affid=2800&bm-verify=AAQAAAAJ_5xIwKwEnMkoqJ7FPqocBIFzE22YQkx5TZWMj2PpJw1Q0ZDzVwBRfCp-iSZ-JcXRlzMy3Hp8pIchmSOoDy4SHRyJKr-NwY9inELmhmLYqU42oCQjQF-KPrMCDsROvfK49W_MWDXn_NKQmrVjOxIKpdglbyDHrLDLAzMMCd90BrlM4z-QODrrRh3RkNZR5r7oJboD2v4mslNwv0BA4pkxI4-WtJhsjvv_wAVBRb4dP67WnwAPMG-6QhENg8wl7trf_C9-9eQ9MkSyOXc1mmi7CcLiClRAXSQhcUlCvYa_m015FFouyzmWB2w6n3zudHTB6RHqwJk4yV4HUZmeYggJwwbV`;
			trackCodeList.push(trackCode);
			return URL;
		});

		try {
			const responses = await Promise.all(
				urls.map((url) => fetch(url, { method: "GET", headers }))
			);
			const raceData = await Promise.all(
				responses.map((response) =>
					response.ok
						? response.json()
						: Promise.reject("Failed to fetch data")
				)
			);

			console.log(
				`Status Codes: ${responses
					.map((response) => response.status)
					.join(", ")}`
			);
			return raceData;
		} catch (error) {
			console.error("Error:", error);
		}

		console.log("Testing data from function named getRaces");
		console.log(typeof trackData);
		console.log(trackData);
	}
	const raceData = await getRaces(trackData);
}

main();
