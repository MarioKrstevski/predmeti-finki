import React from 'react';
import { connect } from 'react-redux';
const Courses = ({filtered}) => {
    console.log(filtered);
    return (
        <>
            {' '}
            <div className="">Course Details or Course List</div>
            <div>
                <ul>
                    {filtered.map(({ id, name, semester }) => (
                        <li>
                            {id} {name} {semester}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

function mapStateToProps(state) {
    return {
        filtered: state.filtered,
    };
}

export default connect(mapStateToProps)(Courses);
