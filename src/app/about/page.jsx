import CeoSection from '@/components/AboutUS/CeoSection';
import JoinUsTeam from '@/components/AboutUS/JoinUsTeam';
import TeamMembers from '@/components/AboutUS/TeamMembers';
import ServiceTakeCompany from '@/components/Homepages/ServiceTakeCompany';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <CeoSection/>
            <TeamMembers/>
            <JoinUsTeam/>
            <ServiceTakeCompany/>
        </div>
    );
};

export default AboutPage;