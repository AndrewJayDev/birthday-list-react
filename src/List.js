import React from "react";

const List = (props) => {
    const people = props.people;
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <>
                        <section className="person" key={id}>
                            <img src={image} alt="" />
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </section>
                    </>
                );
            })}
        </>
    );
};

export default List;
