const rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const Json2CsvParser = require("json2csv").Parser;
const request = require("request")

const URLs = [
	{
		url: "https://www.imdb.com/title/tt2381249/",
		_id: "tt2381249"
	},{
		url: "https://www.imdb.com/title/tt1229238/",
		_id: "tt1229238"
	},{
		url: "https://www.imdb.com/title/tt0468569/",
		_id: "tt0468569"
	},{
		url: "https://www.imdb.com/title/tt0167260/",
		_id: "tt0167260"
	},{
		url: "https://www.imdb.com/title/tt0111161",
		_id: "tt0111161"
	}
	];

(async () => {
	moviesData = []
	for (let movie of URLs){
		console.log(`Scraping data for : ${movie.url}`)
		const response = await rp({
			uri:movie.url,
			headers:{
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
			},
			gzip:true
		});

		let $ = cheerio.load(response)

		let title = $("#__next > main > div > section.ipc-page-background.ipc-page-background--base.TitlePage__StyledPageBackground-wzlr49-0.dDUGgO > section > div:nth-child(4) > section > section > div.TitleBlock__Container-sc-1nlhx7j-0.hglRHk > div.TitleBlock__TitleContainer-sc-1nlhx7j-1.jxsVNt > h1").text()
		let rating = $("#__next > main > div > section.ipc-page-background.ipc-page-background--base.TitlePage__StyledPageBackground-wzlr49-0.dDUGgO > section > div:nth-child(4) > section > section > div.TitleBlock__Container-sc-1nlhx7j-0.hglRHk > div.RatingBar__RatingContainer-sc-85l9wd-0.hNqCJh.TitleBlock__HideableRatingBar-sc-1nlhx7j-4.bhTVMj > div > div:nth-child(1) > a > div > div > div.AggregateRatingButton__ContentWrap-sc-1ll29m0-0.hmJkIS > div.AggregateRatingButton__Rating-sc-1ll29m0-2.bmbYRW > span.AggregateRatingButton__RatingScore-sc-1ll29m0-1.iTLWoV").text()
		let ratedBy = $("#__next > main > div > section.ipc-page-background.ipc-page-background--base.TitlePage__StyledPageBackground-wzlr49-0.dDUGgO > section > div:nth-child(4) > section > section > div.TitleBlock__Container-sc-1nlhx7j-0.hglRHk > div.RatingBar__RatingContainer-sc-85l9wd-0.hNqCJh.TitleBlock__HideableRatingBar-sc-1nlhx7j-4.bhTVMj > div > div:nth-child(1) > a > div > div > div.AggregateRatingButton__ContentWrap-sc-1ll29m0-0.hmJkIS > div.AggregateRatingButton__TotalRatingAmount-sc-1ll29m0-3.jkCVKJ").text()
		let duration = $('#__next > main > div > section.ipc-page-background.ipc-page-background--base.TitlePage__StyledPageBackground-wzlr49-0.dDUGgO > section > div:nth-child(4) > section > section > div.TitleBlock__Container-sc-1nlhx7j-0.hglRHk > div.TitleBlock__TitleContainer-sc-1nlhx7j-1.jxsVNt > div.TitleBlock__TitleMetaDataContainer-sc-1nlhx7j-2.hWHMKr > ul > li:nth-child(3)').text().trim()
		let poster = $("div.ipc-poster img.ipc-image").attr("src")
		let genres = []
		$("div.ipc-chip-list.GenresAndPlot__GenresChipList-cum89p-4.gtBDBL a").each((i,element) => {
			let genre = $(element).text()
			genres.push(genre)
		})

		movieObject = {
			title,
			rating,
			ratedBy,
			duration,
			poster,
			genres
		}
		moviesData.push(movieObject);
		await new Promise((resolve, reject) => {
			let stream = request({
				uri: poster,
				headers:{
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
				},
				gzip: true
			})
			.pipe(fs.createWriteStream(`${movie._id}.jpg`))
			.on("finish", () => {
				console.log(`Finished downloading ${movie._id}.jpg`)
				resolve();
			})
			.on("error", (error) => {
				reject(error);
			})
		}).catch(error => {
				console.log(`Error on downloading ${movie._id}.jpg: ${error}`)
		});
	}
	let fields = ["title", "rating", "ratedBy", "duration", "genres"];
	let json2csvParser = new Json2CsvParser({fields});
	const csv = json2csvParser.parse(moviesData)
	console.log(csv)
	fs.writeFileSync("./movieData.json",JSON.stringify(moviesData), 'utf-8')
	fs.writeFileSync("./movieData.csv",csv,'utf-8')

	console.log(moviesData)
})()