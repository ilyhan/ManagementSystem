import { CSSProperties } from 'react';
import "@/common/ui/loader/style.scss";

interface ILoaderProps {
    style?: CSSProperties;
};

const Loader = ({ style }: ILoaderProps) => {
    return (
        <div className='loader__wrapper' style={style}>
            <span className="loader"></span>
        </div>
    )
};

export default Loader;