
class WxGainPlotRewardReqNet {
	public constructor() {
	}
	public SessonId:string;
	public PlotId:string;
	public ChapterId:string;
}
class WxGainPlotRewardResNet {
	public constructor() {
	}
	public RewardGold:string;
	public UserGoldNum:number;
}
class WxGainChapterRewardReqNet {
	public constructor() {
	}
	public SessonId:string;
	public PlotId:string;
	public ChapterId:string;
}
class WxGainChapterRewardResNet {
	public constructor() {
	}
	public IsSuccess:boolean;
	public PlotId:string;
	public RewardGold:string;
	public UserGoldNum:number;
}

class WxCostTipReqNet {
	public constructor() {
	}
	public SessonId:string;
	public PlotId:string;
}
class WxCostTipResNet {
	public constructor() {
	}
	public CostGold:string;
	public UserGoldNum:number;
}


class WxShareOnceReqNet {
	public constructor() {
	}
	public SessonId:string;
}
class WxShareOnceResNet {
	public constructor() {
	}
	public RewardGold:string;
	public UserGoldNum:number;
}