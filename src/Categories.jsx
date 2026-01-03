import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineDensitySmall } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

export const Categories = [
    {
        id: 1,
        name: "All",
        Icon:<MdOutlineDensitySmall className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 2,
        name: "breakfast",
        Icon:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600"/>
    },
    { 
        id: 3,
        name: "soups",
        Icon:<TbSoup className="w-[60px] h-[60px] text-green-600" />
    },
    {   
        id: 4,
        name: "pasta",
        Icon:<CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />       
    },
    {
        id: 5,
        name: "main_course",
        Icon:<MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 6,  
        name: "pizza",
        Icon:<GiFullPizza className="w-[60px] h-[60px] text-green-600"/>

    },
    {
        id: 7,
        name: "burger",
        Icon:<GiHamburger className="w-[60px] h-[60px] text-green-600"/>
    }
]
export default Categories;