import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interface/heroes";
import styles from "./heroesList.module.scss";
import HeroPicture from "../HeroPicture";

interface IProps {
    heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
    return (
        <>
            <h1 className={`${spidermanFont.className} ${styles.title}`}>Personagens</h1>
            <section className={styles.heroes}>
                {heroes.map(hero => (
                    <div key={hero.id} className={`${styles.imageContainer} ${styles[hero.id]}`}>
                        <HeroPicture hero = {hero} />
                    </div>
                ))}
            </section>
        </>
    );
}