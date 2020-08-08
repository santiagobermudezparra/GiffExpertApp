import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem
        title={title} url={url}/>);
    
    test('debe de mostrar el componente correctamente', () => {
        

       
        expect(wrapper).toMatchSnapshot();

    })

    test('debe tener un parrafo con el titulo', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
 
        expect(img.prop('alt')).toBe(title);
        expect(img.prop('src')).toBe(url);
    })
    
    test('debe tener el animate_fadeIn ', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toBe('card animate__animated animate__fadeIn');

    })
    


    
    
    
    

})
