import { IHeroData } from "@/interface/heroes"
import HeroDetails from "../HeroDetails";

interface IProps {
    heroes: IHeroData[];
    activeId: string;
}

export default function Carousel({ heroes, activeId }: IProps) {
    return (
        <>
            <h1>Components Carousel: {activeId}</h1>
            <HeroDetails data={heroes[0]} />
        </>
    )
}