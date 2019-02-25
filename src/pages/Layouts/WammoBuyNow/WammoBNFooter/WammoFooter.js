import React ,{ Component } from 'react';

import './WammoFooter.css';

class WammoFooter extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <footer className="page-footer">
                <div className="containerCentered containerExtend">
                    <ul className="footer-main secondaryLink">
                        <li><a href="#" data-pa-click="footer|help" pa-marked="1">Help</a></li>									
                        <li><a href="#" data-pa-click="footer|contact" pa-marked="1">Contact</a></li>
                        <li><a href="#" data-pa-click="footer|fees" pa-marked="1">Fees</a></li>
                        <li><a href="#" data-pa-click="footer|security" pa-marked="1">Security</a></li>
                        <li><a href="#" data-pa-click="footer|apps" pa-marked="1">Apps</a></li>
                        <li><a href="#" data-pa-click="footer|shop" pa-marked="1">Shop</a></li>
                        <li className="country-selector ">
                            <a href="#" data-pa-click="footer|country-selector" title="See all countries/regions" className="country US" pa-marked="1">See all countries/regions </a>
                        </li>
                    </ul>
                    <ul className="footer-secondary secondaryLink">
                        <li><a href="#" target="_blank" data-pa-click="footer|about" rel="noopener" pa-marked="1">About</a></li>
                        <li><a href="#" target="_blank" data-pa-click="footer|blog" rel="noopener" pa-marked="1">Blog</a></li>
                        <li><a href="#" target="_blank" data-pa-click="footer|jobs" rel="noopener" pa-marked="1">Jobs</a></li>
                        <li><a href="#" data-pa-click="footer|investor-relations" pa-marked="1">Investor Relations</a></li>
                        <li><a href="#" data-pa-click="footer|social-innovation" pa-marked="1">Social Innovation</a></li>
                        <li><a href="#" data-pa-click="footer|public-policy" pa-marked="1">Public Policy</a></li>
                        <li><a href="#" data-pa-click="footer|sitemap" pa-marked="1">Sitemap</a></li>
                        <li><a href="#" data-pa-click="footer|enterprise" pa-marked="1">Enterprise</a></li>
                        <li><a href="#" data-pa-click="footer|partners" pa-marked="1">Partners</a></li>
                    </ul>
                    <ul className="footer-tertiary copyright-section secondaryLink">
                        <li id="footer-copyright" className="footer-copyright">© 1999–2019 </li>
                        <li id="footer-privacy"><a href="#" data-pa-click="footer|privacy" pa-marked="1">Privacy</a></li>
                        <li className="footer-legal"><a href="#" data-pa-click="footer|legal" pa-marked="1">Legal</a></li>
                        <li id="siteFeedback" className="">
                            <a data-pa-click="footer|SiteFeedback" href="#" pa-marked="1">Feedback</a>
                        </li>
                    </ul>						
                </div>
            </footer>
        );
    }
};

export default WammoFooter;
