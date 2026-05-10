import Header from "../components/layout/Header";

const MainLayout = ({ children }) => {
    return (
        <main>
            <Header />
            {children}
        </main>
    );
};

export default MainLayout;