import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className="h-[calc(100vh-132px)]">{children}</main>
      <Footer />
    </>
  );
}
