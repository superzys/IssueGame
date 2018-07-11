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
    public SessinId: string;
    public nickName: string;
    public gender: string;
    public city: string;
    public province: string;
    public country: string;
    public avatarUrl: string;

}