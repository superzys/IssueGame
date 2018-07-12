class UserManger {
	public constructor() {
	}
	private static instance: UserManger;
	public static getInstance(): UserManger {
		if (this.instance == null) {
			this.instance = new UserManger();
		}
		return this.instance;
	}
	public userInfoObj: UserInfo = new UserInfo();
	// var param
	public SetUserInfo(userObj): void {
		this.userInfoObj.WxUserInfo = userObj;
			
	}
	public SetUserGameInfo(userObj): void {
		//存下userID
		egret.localStorage.setItem("WxIssue_UserId", userObj.UserId);
		this.userInfoObj.UserGameInfo = userObj;

	}
}