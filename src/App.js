import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {publicRoutes} from '~/routes'
import {DefaultLayout} from "~/components/Layout";
import {Fragment} from "react";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((routes, index) => {
                        const Page = routes.component
                        let Layout = DefaultLayout
                        if(routes.layout) {
                            Layout = routes.layout
                        } else if(routes.layout === null) {
                            Layout = Fragment;
                        }
                        return <Route
                            key={index}
                            path={routes.path}
                            element={<Layout><Page/></Layout>}
                        ></Route>
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
