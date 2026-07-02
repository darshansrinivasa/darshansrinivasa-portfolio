import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeStats } from "@/components/sections/home/HomeStats";
import { HomeFeaturedProjects } from "@/components/sections/home/HomeFeaturedProjects";
import { HomeServices } from "@/components/sections/home/HomeServices";

export default function Home() {
  return (
    <main className="flex-1">
      <HomeHero />
      <HomeStats />
      <HomeFeaturedProjects />
      <HomeServices />
    </main>
  );
}
