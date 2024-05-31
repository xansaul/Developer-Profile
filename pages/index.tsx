import { AppLayout } from "@/components";
import { Banner, Contact, Experience, Technologies } from "@/components/information";



export default function Home() {
  return (
    <AppLayout>
      <Banner />
      <Technologies />
      <Experience />
      <Contact />
    </AppLayout>
  );
}
