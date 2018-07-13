class UserInfo {
	public constructor() {
	}
	public WxUserInfo: LoginSendNet;
	public UserGameInfo: LoginResNet;

	public GetLoginReward(): LoginRewardStruct[] {
		let arr: LoginRewardStruct[] = [];
		for (let i = 0; i < this.UserGameInfo.LoginRewardArr.length; i++) {
			let oneDay: LoginRewardStruct = new LoginRewardStruct();

			oneDay.rewardNum = this.UserGameInfo.LoginRewardArr[i];
			oneDay.day = i;
			if (this.UserGameInfo.SignedNum >= i) {
				oneDay.isGained = true;
			} else {
				oneDay.isGained = false;
			}
			arr.push(oneDay);
		}
		return arr;
	}
}

class LoginRewardStruct {
	public constructor() {
	}
	public rewardNum: number;
	public day: number;
	public isGained: boolean;
}
class AlLChapters{
	public All: ChapterData[];
}
class ChapterData{
		public constructor() {
	}
	public _id: number;
	public Name: string;
	public Desc: string;
	public ChargeNum: number;
	public HardLv: number;
	public PlotIDArr: number[];
	public IsUnLock: boolean;
}