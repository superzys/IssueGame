class LoginSendNet {
    public constructor(userInfo) {
        this.nickName = userInfo.nickName;
        this.gender = userInfo.gender;
        this.city = userInfo.city;
        this.province = userInfo.province;
        this.country = userInfo.country;
        this.avatarUrl = userInfo.avatarUrl;
    }
    public code: string;
    public UserId: string;
    public nickName: string;
    public gender: string;
    public city: string;
    public province: string;
    public country: string;
    public avatarUrl: string;

}

class LoginResNet {
    public constructor() {
      
    }
    public SessonId: string;
    public UserId: string;
    public Gold: number;
    public ChapterId: number;
    public PlotId: string;
    public LoginRewardArr: number[];
    public SignedNum: number;
    public RemainSignNumToday: number;
    public ShareTodayNum: number;

}

class WxLoginRewardReqNet {
	public constructor() {
	}
	public SessonId:string;
}
class WxLoginRewardResNet {
	public constructor() {
	}
	public AddGoldNum:string;
	public UserGoldNum:number;
}