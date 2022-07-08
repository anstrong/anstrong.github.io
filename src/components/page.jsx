import * as React from "react";
import Section from './section.jsx';
import Head from './head.jsx';
import myData from '../../data.json';

const Page = props => {
    var data = myData[props.name.toLowerCase()];
    var sections = data.sections.map(section => [section, React.createRef()]);

    return (
        <div className="page">
            <Head
                title={data.title}
                sections={sections}
                img={data.img}
            />
            <ul>
                {sections.map(([section, ref]) => (
                    <Section 
                        ref={ ref }
                        title={section.title}
                        records={section.records}
                        //render={eval(section.render)}
                        key={section.title}
                />
                ))}
            </ul>
        </div>
)};

export default Page;
