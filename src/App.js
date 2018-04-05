import React from 'react';
import axios from './axios';
import AddScrapbook from './AddScrapbook';
import MyScrapbooks from './MyScrapbooks';
import EditScrapbook from './EditScrapbook';
import Scrapbook from './Scrapbook';
import Logo from './Logo';
import {BrowserRouter, Route, Link} from 'react-router-dom'

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li id="logo-menu"><Link to="/myscrapbooks"><Logo /></Link></li>
                            <li className="li"><a href="/logout">LOG OUT</a></li>
                            <li className="li"><Link to="/addscrapbook">ADD SCRAPBOOK</Link></li>
                            <li className="li"><Link to="/myscrapbooks">MY SCRAPBOOKS</Link></li>
                        </ul>
                    </nav>
                    <Route exact path="/addscrapbook" component={AddScrapbook} />
                    <Route exact path="/myscrapbooks" component={MyScrapbooks} />
                    <Route exact path="/editscrapbook/:id" component={EditScrapbook} />
                    <Route exact path="/scrapbook/:id" component={Scrapbook} />
                </div>
            </BrowserRouter>
            <footer className="footer">&copy; 2018 Databerries GmbH</footer>
        </div>
        )
    }
}
