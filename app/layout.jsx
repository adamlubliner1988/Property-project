import "@/assets/styles/global.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata = {
  title: "propertyPuls | Find the Perfect Rental",
  description: "Find The Perfect Rental For You",
  keywords: "rental, find rental, assets for",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer  />
      </body>
    </html>
  );
};

export default MainLayout;
