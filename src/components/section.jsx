import * as React from "react";
import Record from './record.jsx';

const Section = section => {
    return (
        <div className="section" id={section.title}>
            <h2><b> {section.title} </b></h2>
            <ul className="record-list">
                {section.records.map(record => makeGeneric(record)
                    //section.render(record)
                )}
            </ul>
        </div>
    );
}

function makeGeneric(item) {
    console.log(item)
    return (
        <Record
            header={item.duration}
            title={item.title}
            place={item.place}
            subtitle={item.description}
            content={item.details}
            footer={item.tags}
            links={item.links}
        />
    );
}

function makeJob(job) {
    return (
        makeGeneric(job)
    );
}

function makeDegree(degree) {
    return (
        makeGeneric(degree)
    );
}

const MakeSection = React.forwardRef((props, {ref}) => (
    <Section 
        {...props}
        ref={ref}
    />
))

export default Section;
