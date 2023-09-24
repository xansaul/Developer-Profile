import { AppLayout } from "@/components";
import { Banner, Experience, Technologies } from "@/components/information";



export default function Home() {
  return (
    <AppLayout>
      <Banner />
      <Experience />
      <Technologies />
    </AppLayout>
  );
}
