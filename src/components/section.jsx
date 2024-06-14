import * as React from "react";
import Record from './record.jsx';

const Section = (section, ref) => {
    return (
        <div className="section" id={section.title} ref={ref}>
            <h2>
                <b> {section.title}</b>
            </h2>
            <ul className="record-list">
                {section.records.map(record => makeGeneric(record))}
            </ul>
        </div>
    );
}

function makeGeneric(item) {
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

export default React.forwardRef(Section);
