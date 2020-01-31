import React from 'react';
import { connect } from 'react-redux';
import { Card, Select } from 'antd';
import { Link } from '@reach/router';

const { Option } = Select;
const Courses = ({ filtered }) => {
    console.log(filtered);
    return (
        <div className="container min-w-sm">
            <div className="p-4 mb-3 flex justify-between items-baseline  border-b-2 border-gray-400">
                <div className="mr-3">Course Details or Course List</div>
                <div className="flex items-baseline ">
                    <span className="mr-3 whitespace-no-wrap">Sort By</span>
                    <Select defaultValue="semester" className="w-32">
                        <Option value="semester">Semester</Option>
                        <Option value="year">Year</Option>
                        <Option value="difficulty-high-first">
                            Difficulty H-L
                        </Option>
                        <Option value="difficulty-low-first">
                            Difficulty L-H
                        </Option>
                    </Select>
                </div>
            </div>
            <div className="flex flex-row flex-wrap flex justify-center">
                {filtered.map(({ id, name, semester }) => (
                    <div className=" max-w-md pr-2 pb-2 w-full lg:w-1/2">
                        <Link
                            key={name}
                            to={
                                '/subject/' +
                                name.toLowerCase().replace(/ /g, '-')
                            }
                        >
                            <Card
                                className="hover:shadow-md hover:bg-indigo-100 hover:border-gray-500"
                                title={id + ' ' + name + ' ' + semester}
                            >
                                "Lorem Ipsum"
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        filtered: state.filtered,
    };
}

export default connect(mapStateToProps)(Courses);
