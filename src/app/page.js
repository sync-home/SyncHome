import HeroSlider from "@/components/HeroSlider/HeroSlider";
import ManageEverything from "@/components/ManageEverything/ManageEverything";
import SmartHome from "@/components/SmartHome/SmartHome";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)]">
      <HeroSlider></HeroSlider>
      <SmartHome></SmartHome>
      <ManageEverything></ManageEverything>
    </main>
  )
}
