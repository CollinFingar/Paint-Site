import React, { useEffect } from 'react';
import { LandingWrapper, Triple } from './Landing.style.js';
import Card from '../components/card/card';
import Section from '../components/section/section';

const Landing = () => {

    useEffect(() => {}, []);

    const fakeData = [{
        image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120101366_EmperorsChampionLead.jpg?fm=webp&w=600&h=619",
        title: "The Emperor's Champion"
    },{
        image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120113035_TauEmpireGhostkeel01.jpg?fm=webp&w=670&h=691",
        title: "Ghostkeel"
    },{
        image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120201130_S2DDaemonPrince01.jpg?fm=webp&w=600&h=619",
        title: "Daemon Prince"
    },]

    return (<LandingWrapper>
        <h1>Recent Projects</h1>
        <Triple>
            { fakeData.map((item) => 
                    <Card color="h2" key={ item.title }>
                        <img src={item.image} />
                        <div>{item.title}</div>
                    </Card>
                )}
        </Triple>
        
        <Section color="h3">
            <h1>My Guide</h1>
            <p>Little write up with a link</p>
        </Section> 
    </LandingWrapper>)
};
export default Landing;
