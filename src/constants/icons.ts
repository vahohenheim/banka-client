import {
    AestheticIcon,
    CultureIcon,
    AddIcon,
    GouvIcon,
    KodamaIcon,
    Kodama2Icon,
    ParamIcon,
    MarketIcon,
    FoodIcon,
    TransportIcon,
    HomeIcon,
    SmokeIcon,
    ArrowIcon
} from "../views/icons";
import {degreeIconConfig, IconConfig} from "../models/icons";

export type IconType =
    "arrow" |
    "market" |
    "food" |
    "transport" |
    "home" |
    "smoke" |
    "aesthetic" |
    "culture" |
    "add" |
    "gouv" |
    "kodama" |
    "kodama2" |
    "param";

export const Icons: IconConfig[] = [
    {
        value: "arrow",
        component: ArrowIcon
    },
    {
        value: "market",
        component: MarketIcon
    },
    {
        value: "food",
        component: FoodIcon
    },
    {
        value: "transport",
        component: TransportIcon
    },
    {
        value: "home",
        component: HomeIcon
    },
    {
        value: "smoke",
        component: SmokeIcon
    },
    {
        value: "aesthetic",
        component: AestheticIcon
    },
    {
        value: "culture",
        component: CultureIcon
    },
    {
        value: "add",
        component: AddIcon
    },
    {
        value: "gouv",
        component: GouvIcon
    },
    {
        value: "kodama",
        component: KodamaIcon
    },
    {
        value: "kodama2",
        component: Kodama2Icon
    },
    {
        value: "param",
        component: ParamIcon
    },
]

export const arrowDegreesConfig: degreeIconConfig[] = [
    {
        direction: 'top',
        value: 0
    },
    {
        direction: 'right',
        value: 90
    },
    {
        direction: 'bottom',
        value: 180
    },
    {
        direction: 'left',
        value: 270
    }
]