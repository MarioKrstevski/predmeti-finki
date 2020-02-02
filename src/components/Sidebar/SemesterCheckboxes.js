import React from 'react';
import { Checkbox } from 'antd';

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}
const semsterOptions = ['Зимски', 'Летен'];

const yearOptions = [
    { label: 'Првa', value: 4 },
    { label: 'Вторa', value: 3 },
    { label: 'Третa', value: 2 },
    { label: 'Четвртa', value: 1 },
];
const SemesterCheckboxes = () => {
    return (
        <div className="border-2 p-3 h-32 filter-container">
            <h4>Според семестар</h4>
            <Checkbox.Group
                className="my-4"
                options={semsterOptions}
                onChange={onChange}
            />
            <br />
            <br />
            <h4>Според година</h4>
            <Checkbox.Group
                className="my-4"
                options={yearOptions}
                onChange={onChange}
            />
            <br />
            <br />
        </div>
    );
};

export default SemesterCheckboxes;
