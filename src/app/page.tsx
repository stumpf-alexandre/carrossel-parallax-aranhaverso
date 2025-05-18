import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/interface/heroes";
import styles from "./page.module.scss";

async function getHeroesData(): Promise<{ data: IHeroData[]}> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

  if(!res.ok) {
    throw new Error("Falha de requisição de lista de heróis");
  }

  return res.json();
}

export default async function Home() {
  const heroes = await getHeroesData();

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data} />
    </main>
  );
}