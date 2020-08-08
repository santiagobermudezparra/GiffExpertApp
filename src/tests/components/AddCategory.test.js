const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")
import React from 'react';
import '@testing-library/jest-dom'
describe('pruebas en <AddCategory/>', () => {

    const setCategories =  () => {};


    test('debe mostrarse correctamente', () => {
        const wrapper = shallow(<AddCategory
        setCategories={setCategories}/>);
        expect(wrapper).toMatchSnapshot();
        
    })
    
})
