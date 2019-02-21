import React ,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './WammoHeader.css';

class WammoHeader extends Component {
    constructor(props){
        super(props)

    }

    // componentDidMount() {
    //     console.log("wammmoheader loaded!");
    //     var responsiveWidth = 990;
    //     var _widthResize;

    //     $(window).resize(function() {
    //         _widthResize = $(this).width() > responsiveWidth;
    //     }).resize();

    //     $('.navBox >ul >li').hover(function(){
    //         if(_widthResize){
    //             var _this = $(this);
    //             _this.addClass('active').children('.dropNav').stop(true, true).slideDown(300);        
    //         }  
    //     } , function(){
    //         if(_widthResize){
    //             $(this).removeClass('active').children('.dropNav').stop(true, true).hide();
    //         }   
    //     });

    //     $('.dropNav').parent('li').click(function(e) {
    //         if(!_widthResize){
    //             $(this).children('.dropNav').stop(true, true).slideToggle(300);
    //             e.preventDefault();
    //         }    
    //     });

    //     $("#openPageslide").sideNav();
    // }

    render() {
        return (
            <header className="wamp-header">
                <div className="wamp-header-container">
                    <div className="container">
                        <div className="banner-container">
                            <div className="wammopay-logo-wrapper">
                                <a href="#" className="wammopay-logo" pa-marked="1">
                                </a>
                            </div>
                            <a id="openPageslide" href="#pageslide">
                                <span></span>
                            </a>
                            <div id="pageslide" className="navBox main-menu">
                                <ul>
                                    <li> <a className="m-m-title" href="#">Personal<i className="fa fa-angle-down"></i></a>
                                    <ul className="dropNav">
                                        <li><a href="#">item1-1</a></li>
                                        <li><a href="#">item1-2</a></li>
                                        <li><a href="#">item1-1</a></li>
                                        <li><a href="#">item1-1</a></li>
                                        <li><a href="#">item1-1</a></li>
                                    </ul>
                                    </li>
                                    <li> <a href="#">Business<i className="fa fa-angle-down"></i></a>
                                    <ul className="dropNav">
                                        <li><a href="#">item2-1</a></li>
                                        <li><a href="#">item2-2</a></li>
                                        <li><a href="#">item2-1</a></li>
                                        <li><a href="#">item2-1</a></li>
                                        <li><a href="#">item2-1</a></li>
                                    </ul>
                                    </li>
                                    <li> <a href="#">Send<i className="fa fa-angle-down"></i></a>
                                    <ul className="dropNav">
                                        <li><a href="#">item3-1</a></li>
                                        <li><a href="#">item3-2</a></li>
                                        <li><a href="#">item3-1</a></li>
                                        <li><a href="#">item3-1</a></li>
                                        <li><a href="#">item3-1</a></li>
                                    </ul>
                                    </li>
                                    <li> <a href="#">Request<i className="fa fa-angle-down"></i></a>
                                    <ul className="dropNav">
                                        <li><a href="#">item4-1</a></li>
                                        <li><a href="#">item4-2</a></li>
                                        <li><a href="#">item4-1</a></li>
                                        <li><a href="#">item4-1</a></li>
                                        <li><a href="#">item4-1</a></li>
                                    </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-container">
                                <a href="#" className="btn btn-login"><font>Log In</font></a>
                                <a href="#" className="btn btn-signup"><font>Sign Up</font></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
};

export default WammoHeader;
