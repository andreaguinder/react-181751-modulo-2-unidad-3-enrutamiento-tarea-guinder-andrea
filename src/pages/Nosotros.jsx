import styles from '../styles/Pages.module.scss';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Nosotros = () => {

    return (
        <>

            <div className={styles.containerGeneral}>
                <h1>Nosotros</h1>
                <div className={styles.containerNosotros}>
                    <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsam deleniti quidem nam perferendis necessitatibus at labore animi dolore? Molestias fuga quis dolor. Eos voluptatem cum, excepturi necessitatibus deleniti modi.
                        Temporibus distinctio voluptates animi praesentium suscipit tempore quidem, dolore perferendis quas, corporis hic fuga nam eius commodi error cumque libero doloremque. Ipsa minima asperiores ipsum maxime accusamus iure recusandae officiis!
                        Consequuntur, cumque modi? Repellendus voluptatem minus earum repudiandae delectus ad, itaque quo eum sed! Minima, tempora facilis. Voluptatem consequatur facere aut nobis quae molestias culpa dolor animi suscipit. Unde, laudantium.
                        Tempora nostrum sit, hic a sequi facere laudantium repellendus dolore? A consequatur ab deserunt voluptatum debitis repudiandae, nesciunt neque voluptatem saepe natus eaque magni corrupti, provident enim molestiae voluptate praesentium?
                        Quod enim, dolorem harum minus nulla vero non omnis rerum placeat et officia, id inventore modi in? Velit consequatur, dolorem, eos quidem debitis earum quasi nam eveniet soluta commodi ratione.</p></div>
                    <div className={styles.containerRedes}>
                        <div>Facebook <FaFacebook size={24} /></div>
                        <div>Instagram <FaInstagram size={24} /></div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Nosotros;