// TypeScript file
class WxGetRankReqNet {
	public constructor() {
	}
	public SessonId:string;
}
class WxGetRankResNet {
	public constructor() {
	}
    public RankArr:RankUserInfoNet[];
}
class RankUserInfoNet {
	public constructor() {
	}
	public rankNum:number;
	public nickName:string;
	public avatarUrl:string;
	public AddGoldNum:string;
	public ChapterId:string;
	public PlotId:string;
	public PveNum:number;
}