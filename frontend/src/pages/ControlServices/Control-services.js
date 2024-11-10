import React from 'react';

//Components
import Header from '../../components/header-component/header';
import Title from '../../components/title-component/title';
import Userprofile2 from '../../components/user-profile-components/user-profile2';
import SectionServices from '../../components/section-control-services/section-services';


function ControlServices() {
    return (
        <>
        <Header>
            <Title>Controle de Serviços</Title>
            <Title>Dentalis</Title>
            <Userprofile2 />
        </Header>
        <SectionServices />
        </>
    )
}

export default ControlServices;