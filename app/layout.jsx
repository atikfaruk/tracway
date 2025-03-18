import "./globals.css";
import { Noto_Sans_Bengali, Urbanist } from "next/font/google";
import Providers from "./providers";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-urbanist",
});

const noto = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  display: "swap",
  preload: true,
  variable: "--font-noto",
});

export const metadata = {
  title: "Tracway: Book Flight, Hotel, Bus, Train, Tour Packages Online",
  description: "Tracway is a travel agency based in Bangladesh providing trusted and hassle-free travel solutions.",
  openGraph: {
    image: "/hero.png",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${urbanist.variable} ${noto.variable}`}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
