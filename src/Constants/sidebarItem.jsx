import { v4 as uuidv4 } from "uuid";
import { AiOutlineDollarCircle, AiOutlineHome } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";

export const sidebarItem = [
    {id: uuidv4(), link: '/', content: 'صفحه اصلی', icon: <AiOutlineHome size={20}/>},
    {id: uuidv4(), link: '/products', content: 'محصولات', icon: <MdAddShoppingCart size={20}/>},
    {id: uuidv4(), link: '/comments', content: 'کامنت ها', icon: <BiCommentDetail size={20}/>},
    {id: uuidv4(), link: '/users', content: 'کاربران', icon: <FiUsers size={20}/>},
    {id: uuidv4(), link: '/orders', content: 'سفارشات', icon: <GiShoppingBag size={20}/>},
    {id: uuidv4(), link: '/offs', content: 'تخفیف ها', icon: <AiOutlineDollarCircle size={20}/>},
]