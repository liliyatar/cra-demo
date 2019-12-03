import React from 'react';
const PeopleList = (props) => (
    <dl>
        {props.people.map(person => (
            <>
                <dt>{person.name}</dt>
                <dd>{`${person.born} - ${person.died}`}</dd>
            </>
        ))}
    </dl>
);

export default PeopleList;
