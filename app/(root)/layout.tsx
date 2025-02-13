import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <main>
      <Header />
        <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;