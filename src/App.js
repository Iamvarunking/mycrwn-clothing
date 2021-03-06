import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import  CheckoutPage  from './pages/checkout-page/checkout.component';
import { auth , createUserProfileAccount } from './firebase/firebase.utils';
import { connect } from 'react-redux' ; 
import setCurrentUser from './redux/user/user.actions' ; 
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from 'reselect'; 

class App extends React.Component {  
  unsubscribeFromAuth = null ; 

  componentDidMount(){
    const { setCurrentUser } = this.props ; 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileAccount(userAuth);

        userRef.onSnapshot(snapshot => {
          
            setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })       
        })
      } else {
      setCurrentUser(userAuth) ; 
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route  path='/shop' component={ ShopPage } />
        <Route path='/checkout' component={ CheckoutPage } />
        <Route exact path='/signin' render={() =>
           this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
      </Switch>
    </div>
  );
  } 
}

const mapStateToProps = createStructuredSelector({
currentUser : selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(App);

