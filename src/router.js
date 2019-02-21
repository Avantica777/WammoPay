import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Layout from './pages/Layouts/WammoBuyNow/WammoLayout';

import BuyNowButton from './pages/BuyNowButton/buynowbutton';
import PopUp from './pages/PopUp/popup';
import AlertDialog from './pages/PopUp/alertDialog';
import PreBuildForm from './pages/PreBuildForm/PreBuildForm';
import BnbResult from './pages/BNBResult/BnbResult';
import NotFound from './pages/NotFound/NotFound';

import routes from './routes';

import reducer from './store/reducer';
import getFormData from './api/getFormData';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        <Component {...props}/>
    )}/>
);

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    // change Title Page
    let checkPath = routes.filter(el => {
        return el.path === location.pathname;
    })

    document.title = checkPath.length === 1 ? (checkPath[0].title ? (checkPath[0].title + ' | Wammopay') : 'Wammopay') : 'Wammopay';

    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInUp'
    //      'rag-fadeInDown'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'
    //      'rag-fadeInUpBig'
    //      'rag-fadeInDownBig'
    //      'rag-fadeInRightBig'
    //      'rag-fadeInLeftBig'
    //      'rag-zoomBackDown'
    const animationName = 'rag-fadeIn'
    if (location.pathname.length > 0) {
        return (
            // Page Layout component wrapper
            <Provider store={store}>
                <Layout>
                    <Switch location={location}>
                        <Route exact path='/' component={BuyNowButton} />
                        <Route path='/buynowbutton' component={BuyNowButton} />
                        <Route path='/prebuildform' component={PreBuildForm} />
                        <Route path='/getFormdata/:itemName/:itemId/:amount/:currency/:email' component={getFormData} />
                        <Route path='/bnbresult' component={BnbResult} />
                        <Route path='/popup' component={PopUp} />
                        <Route path='/alert' component={AlertDialog} />
                        <Redirect exact from='/' to='/buynowbutton' />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </Provider>
        )
    }
    else {
        return (
            // Layout component wrapper
            // Use <BaseHorizontal> to change layout
            <Provider store={store}>
                <Layout {...location}>
                    <TransitionGroup>
                        <CSSTransition key={currentKey} timeout={timeout} classNames={animationName}>
                            <div>
                                <Switch location={location}>
                                    {
                                        routes.map((route,i) => (
                                            route.private ? 
                                            <PrivateRoute key={i} {...route} /> 
                                            : <Route key={i} {...route} />
                                        ))
                                    }
                                    <Redirect to="/buynowbutton" />
                                </Switch>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                </Layout>
            </Provider>
        )
    }
}

export default withRouter(Routes);