class HttpFetch {
	public constructor() {
	}
	private static instance: HttpFetch;
	public static getInstance(): HttpFetch {
		if (this.instance == null) {
			this.instance = new HttpFetch();
		}
		return this.instance;
	}

	// var params = "{'UserName':'张三', 'Pwd': '10'}";
	public async HttpPost(url: string, params: string = "", responseType: string = egret.HttpResponseType.TEXT): Promise<any> {

		var request = new egret.HttpRequest();
		request.responseType = responseType;
		request.open(url, egret.HttpMethod.POST);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//application/json
		request.send(params);

		var promise = new Promise<any>(resolve => {
			request.addEventListener(egret.Event.COMPLETE, (event) => {
				var request = <egret.HttpRequest>event.currentTarget;
				// console.log("http get data ", request.response);
				resolve(request.response);
			}, this);
			request.addEventListener(egret.IOErrorEvent.IO_ERROR, (event) => {
				// console.log("http get error " + event);
				resolve(undefined);
			}, this);
		});
		return promise;
	}
	public async HttpGet(url: string, params: string = "", responseType: string = egret.HttpResponseType.TEXT): Promise<any> {

		var request = new egret.HttpRequest();
		request.responseType = responseType;
		request.open(url +params, egret.HttpMethod.GET);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//application/json
		request.send();

		var promise = new Promise<any>(resolve => {
			request.addEventListener(egret.Event.COMPLETE, (event) => {
				var request = <egret.HttpRequest>event.currentTarget;
				// console.log("http get data ", request.response);
				resolve(request.response);
			}, this);
			request.addEventListener(egret.IOErrorEvent.IO_ERROR, (event) => {
				// console.log("http get error " + event);
				resolve(undefined);
			}, this);
		});
		return promise;
	}
}