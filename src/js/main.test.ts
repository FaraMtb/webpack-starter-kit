import main from './main';
// this is our simple test in jest';

test('Should return a string Happy Application Testing', () => {
    const result = main();
    expect(result).toBe('Happy Application Testing');
});