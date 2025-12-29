import FlashSale from '../Components/FlashSale/FlashSale';
import Slider from '../Components/Slider/Slider';

const Home = () => {


    return (
        <div className='space-y-5'>
            <Slider/>
            <FlashSale></FlashSale>
        </div>
    );
};

export default Home;