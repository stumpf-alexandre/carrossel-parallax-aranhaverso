import { IHeroData } from "@/interface/heroes"

interface IProps {
    heroes: IHeroData[];
    activeId: string;
}

export default function Carousel({ activeId }: IProps) {
    return <h1>Components Carousel: {activeId}</h1>
}