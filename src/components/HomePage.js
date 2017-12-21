import React from 'react';
import { Link } from 'react-router';
import kids from '../assets/img/image_0.png';
import ashot from '../assets/img/image_1.png';
import ionic from '../assets/img/image_2.png';
import blank from '../assets/img/image_3.png';
import '../assets/stylesheets/components/HomePage.scss';
import data from '../data/data.json';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appName: 'Demo App'
        }
        this.onChoose = this.onChoose.bind(this);
    }

    onChoose(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="home-container">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle my" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <img src={kids} alt="KIDS READ" />
                        <span className="title">Demo App</span>
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>
                            <Link to="/" activeClassName="active" onlyActiveOnIndex={true} style={{padding: '10px 0'}}>
                                <span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span>
                                <span className="tig">Tig</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active" onlyActiveOnIndex={true}>
                                <span>No apps in this organization</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active" onlyActiveOnIndex={true} style={{padding: '10px 0'}}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span>
                                        <span>Tigran Hakobyan</span>
                                    </div>
                                    <div className="col-md-5 billing-block">
                                        <span className="glyphicon glyphicon-credit-card" aria-hidden="true"></span>
                                        <span>Billing</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active" onlyActiveOnIndex={true} onClick={this.onChoose}>
                                <img src={blank} alt="" width="34" height="34" />
                                <span>Awesome app</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/demo-app" activeClassName="active" onlyActiveOnIndex={true} onClick={this.onChoose}>
                                <img src={kids} alt="" width="34" height="34" />
                                <span>Demo app</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active" onlyActiveOnIndex={true} onClick={this.onChoose}>
                                <img src={ashot} alt="" width="34" height="34" />
                                <span>Gleisdorf Ashot</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active" onlyActiveOnIndex={true} onClick={this.onChoose}>
                                <img src={blank} alt="" width="34" height="34" />
                                <span>HarutTestApp</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active" onlyActiveOnIndex={true} onClick={this.onChoose}>
                                <img src={ionic} alt="" width="34" height="34" />
                                <span>Ionic test</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active" onlyActiveOnIndex={true} onClick={this.onChoose}>
                                <img src={blank} alt="" width="34" height="34" />
                                <span>MTD</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HomePage;