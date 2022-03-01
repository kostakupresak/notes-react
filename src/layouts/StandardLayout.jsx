import Header from "../components/shared/Header";
import PageTitle from "../components/shared/PageTitle";

function StandardLayout({children, pageTitle}) {
    return (
        <>
            <Header/>
            <main className="main">
                <div className="wrap">
                    <PageTitle title={pageTitle}/>
                    {children}
                </div>
            </main>
        </>
    );
}

export default StandardLayout;