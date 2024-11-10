import React from 'react';

//Components
import Header from '../../components/header-component/header';
import Title from '../../components/title-component/title';
import Userprofile2 from '../../components/user-profile-components/user-profile2';
import SectionCharts from '../../components/section-charts1/section-charts1';
import SectionAnalizeTime from '../../components/section-analizetime/section-analizetime';


function Reportspage() {
    return(
        <>
        <Header>
            <Title>Relatórios</Title>
            <Title>Dentalis</Title>
            <Userprofile2 />
        </Header>
        <SectionAnalizeTime />
        <SectionCharts />
        </>
    )

}

export default Reportspage