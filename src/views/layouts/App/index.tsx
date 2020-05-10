// define
import React from 'react'
import {hot} from "react-hot-loader"
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from '../../../routes'
import Footer from "../Footer";


const App: React.FC<{}> = () => {


    return (
        <>
            <header>

            </header>
            <Router>
                <main>
                    {routes.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                </main>
            </Router>
            <Footer />
        </>
    )


}

export default (hot(module)(App));