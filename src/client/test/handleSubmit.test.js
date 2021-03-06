import { handleSubmit } from '../js/formHandler'


describe('Test, the function "handleSubmit()" should exist' , () => {
    test('It should return true', async () => {
        expect(handleSubmit).toBeDefined();
    });
});
describe('Test, the function "handleSubmit()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});
describe('Test, the function "handleSubmit()" should not be null' , () => {
    test('It should return true', async () => {
        expect(handleSubmit).not.toBeNull();
    });
});