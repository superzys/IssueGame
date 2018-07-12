// TypeScript file
class ToolShowChange {
    public static GetDayDes(day: number): string {
        let des: string = "";
        switch (day) {
            case 1:
                des = "一";
                break;
            case 2:
                des = "二";
                break;
            case 3:
                des = "三";
                break;
            case 4:
                des = "四";
                break;
            case 5:
                des = "五";
                break;
            case 6:
                des = "六";
                break;
            case 7:
                des = "七";
                break;
            case 8:
                des = "八";
                break;
            case 9:
                des = "九";
                break;
            case 10:
                des = "十";
                break;
            case 11:
                des = "十一";
                break;
            case 12:
                des = "十二";
                break;
        }
        return des;
    }
}