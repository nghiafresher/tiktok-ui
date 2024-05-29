import Header from "~/components/Layout/components/Header";
function LayoutOnlyHeader({children}) {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </>
    );
}

export default LayoutOnlyHeader;