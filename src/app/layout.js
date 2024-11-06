import Footerx from "@/components/bolt/Layout/Footerx";
import Navber from "@/components/Shared/Navber";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";


// const inter = Inter({ subsets: ["latin"] });
const grotesk = Space_Grotesk({weight:["300", "400" , "500" , "600" , "700" ], subsets: ["latin","latin-ext"] });

export const metadata = {
  title: "LogicGenX",
  description: "LogicGenX",
  icons: {
    icon: "/logo.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${grotesk.className} bg-black`}>
        {/* <SelasNews/> */}
        <Navber/>
        
        {children}
        
        <Footerx/>
        
        </body>
    </html>
  );
}
