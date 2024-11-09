import React from 'react';
import './App.css';
//Components
import Header from './components/header-component/header';
import Title from './components/title-component/title';
import Navbar from './components/nav-bar-components/nav-bar';
import Userprofile from './components/user-profile-components/user-profile';
import Main from './components/mainHomepage/main';
function App() {
 return (
    <>
    <Header>
        <Title>Dentalis</Title>
        <Navbar />
        <Userprofile />
    </Header>
    <Main />
    </>
 );
}
export default App;

