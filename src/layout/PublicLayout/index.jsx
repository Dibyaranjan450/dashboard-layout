import Footer from "./Footer";
import Header from "./Header";

const PublicLayout = ({ children = <></> }) => {
  return (
    <div className="h-[100vh]">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default PublicLayout;
