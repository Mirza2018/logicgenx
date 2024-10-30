import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Shared/Navber";
import Footer from "@/components/Shared/Footer";
import { Space_Grotesk } from "next/font/google";


// const inter = Inter({ subsets: ["latin"] });
const grotesk = Space_Grotesk({weight:["300", "400" , "500" , "600" , "700" ], subsets: ["latin","latin-ext"] });

export const metadata = {
  title: "Next level services",
  description: "next-level-services",
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
        
        <Footer/>
        
        </body>
    </html>
  );
}
