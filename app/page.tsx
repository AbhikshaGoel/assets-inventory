import Image from "next/image";
import { Dashboard } from "@/app/dashboard/page";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
   <main >
    <div className="hidden md:flex mt-16 max-w-48 flex-col fixed inset-y-0 ">
        <Sidebar/>
    </div>
    <div className="mt-16 h-auto flex flex-col  md:ml-48">
      <Dashboard/>
    </div>
   </main>
  );
}
