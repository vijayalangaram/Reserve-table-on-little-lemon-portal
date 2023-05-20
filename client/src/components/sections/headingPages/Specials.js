import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="idly" price="RS12.99" 
                description="."/>
                <SpecialCard image={Bruschetta}name="Poori" price="RS16.99" description="."/>
                <SpecialCard image={LemonDessert} name="vadai" price="RS8.50" description="."/>
            </section>
            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}