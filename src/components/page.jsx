import * as React from "react";
import Section from './section.jsx';
import Head from './head.jsx';
import myData from '../../data.json';

const Page = props => {
var sections = myData[props.name.toLowerCase()].sections;
/*sections = sections.map(section => (
    {...section, ref: React.createRef()}
));*/

console.log(sections);

return (
    <div className="page">
        <Head
            title={`My ${props.name}`}
            sections = {sections}
        />
        <ul>
            {sections.map(section => (
            <Section 
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
