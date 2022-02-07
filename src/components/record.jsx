import * as React from "react";
const RecordHeader = props => (
    <div className="header card-title">
        <h3 class = "name">{props.left}</h3>
        <h3 class="place">{props.right}</h3>
    </div>
)

const RecordContent = props => (
<ul className="details"> 
    {props.details.map(detail => (
                <li> {detail} </li>
    ))} 
</ul>
)

const RecordFooter = props => (
<ul className="tags">
    {props.list.map(tag => (
        <span class="badge badge-pill">{tag}</span>
    ))} 
</ul>
)

const Record = props => {
    return (
        <li className="record">
            <h4>{props.header}</h4>
            <div className="card p-3 text-left">
                <RecordHeader
                    left={props.title}
                    right={props.place}
                />
                <div className="card-content">
                    <i>{props.subtitle}</i>
                    <RecordContent
                        details={props.content}
                    />
                </div>
                <div className="record-footer">
                    <RecordFooter
                        list={props.footer}
                    />
                </div>
            </div>
        </li>
    );
};

export default Record;
