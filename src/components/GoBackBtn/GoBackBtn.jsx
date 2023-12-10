import { FaArrowLeftLong } from 'react-icons/fa6';
import { GoBackLink } from './GoBackBtn.styled';


const GoBackBtn = ({ path }) => {
    return (
        <GoBackLink to={path}>
            <FaArrowLeftLong />
            Go back
        </GoBackLink>
    );
};

export default GoBackBtn;