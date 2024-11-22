import Navigation from "@/components/navigation";
import Image from "next/image";

export default function Home() {
  return (
   <div>
     <h1>Welcome to Next.js!</h1>
     <Image src="/logo.svg" alt="Logo" width={150} height={150} />
     <p>
       Get started by editing <code>pages/index.js</code> or creating more pages.
     </p>
     <a href="https://nextjs.org/learn/basics/getting-started" target="_blank">
       Learn Next.js
     </a>
     <Navigation/>
     <footer/>
     
   </div>
  );
}
