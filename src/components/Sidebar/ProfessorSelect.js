import React from 'react';

import { Select } from 'antd';
import {connect} from 'react-redux'
const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const ProfessorSelect = ({ professors }) => {
    const children = [];
    for (let i = 0; i < professors.length; i++) {
        children.push(<Option key={professors[i]}>{professors[i]}</Option>);
    }
    return (
        <div className="border-2 p-3 filter-container">
            <Select
                mode="multiple"
                className="my-2"
                style={{ width: '100%', maxHeight: 80, overflowY:'scroll' }}
                placeholder="Please select"
                onChange={handleChange}
            >
                {children}
            </Select>
            ,
        </div>
    );
};

function mapStateToProps(state) {
    return {
        professors: state.professors,
    };
}
export default connect(mapStateToProps)(ProfessorSelect);
