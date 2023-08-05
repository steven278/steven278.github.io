import { Link } from 'react-scroll';

interface Props {id : string;};

export const MyMenu = ({id}:Props) => {
    return (
        <li>
            <Link className="block py-2 pl-3 pr-4 md:border-0 
            md:p-0 rounded transition duration-400 text-gray-900 
            dark:text-gray-100 cursor-pointer"
            activeClass="active" to={id} spy={true} smooth={true} offset={-50} duration={500}>
            {id}
            </Link>
        </li>
    )
}