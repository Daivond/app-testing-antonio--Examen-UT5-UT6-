import {Formulario , mayorDeEdad} from '../components/Formulario';
import { render } from '@testing-library/react';

describe('funciones dentro de Formulario', () => {
    describe('mayorDeEdad', () => {
        test('debe retornar un valor de tipo boolean', () => {
            const result = mayorDeEdad('18');
            expect(typeof result).toBe('boolean');
        });
    
        test('debe devolver true si el valor es 18', () => {
            const result = mayorDeEdad('18');
            expect(result).toBeTruthy();
        });
    
        test('debe devolver true si la función es mayor a 18', () => {
            const result = mayorDeEdad('19');
            expect(result).toBeTruthy();
        });
    
        test('debe devolver false si la función es menor a 18', () => {
            const result = mayorDeEdad('17');
            expect(result).toBeFalsy();
        });
    
        test('debe devolver null si la función es un número negativo', () => {
            const result = mayorDeEdad('0');
            expect(result).toBe(null);
        });
    });

    describe('Formulario', () => {
        test('comprobar que se renderizan los elementos (Cabecera, imagen de gato, campo de texto de edad y nombre, botón)', () => {
            const { getByText, getByRole } = render(<Formulario />);
            expect(getByText('Rellena el formulario')).toBeInTheDocument();
            expect(getByRole('img')).toBeInTheDocument();
            expect(getByText('Nombre')).toBeInTheDocument();
            expect(getByText('Edad')).toBeInTheDocument();
            expect(getByRole('button')).toBeInTheDocument();
        });
    });

    describe('Formulario', () => {
        test('comprobar que cuando el usuario rellena el formulario, aparece una cabecera de nivel 6 en el formulario', () => {
            const { getByText, getByRole } = render(<Formulario />);
            const nombreInput = getByRole('textbox', { name: 'Nombre' });
            const edadInput = getByRole('textbox', { name: 'Edad' });
            const submitButton = getByRole('button', { name: 'Enviar' });
            fireEvent.change(nombreInput, { target: { value: 'Antonio' } });
            fireEvent.change(edadInput, { target: { value: '24' } });
            fireEvent.click(submitButton);
            const resultText = getByRole('heading', { level: 6 });
            expect(resultText).toHaveTextContent('Eres mayor de edad');
        });
    });
});


