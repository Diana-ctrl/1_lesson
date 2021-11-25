import { calculator, sum, ActionType } from './reduser';



test('sum', () => {
    // 1. Тестовые данные
    const num1 = 10;
    const num2 = 3;
    // 2. Выполнение тестируемого кода
    const result = sum(num1, num2);
    // 3. Сравнение с ожидаемым результатом
    expect(result).toBe(13);

})

test('sum of calculator', () => {
    // 1. Тестовые данные
    const num1 = 10;
    const num2 = 20;
    // 2. Выполнение тестируемого кода
    const result = calculator(num1, {type: 'SUM', number: num2});
    // 3. Сравнение с ожидаемым результатом
    expect(result).toBe(30);
})

test('sum of calculator', () => {
    // 1. Тестовые данные
    const num1 = 10;
    const num2 = 10;
    // 2. Выполнение тестируемого кода
    const result = calculator(num1, {type: 'MULTIPLY', number: num2});
    // 3. Сравнение с ожидаемым результатом
    expect(result).toBe(100);
})

test('divide of calculator', () => {
    // 1. Тестовые данные
    const num1 = 10;
    const num2 = 10;
    // 2. Выполнение тестируемого кода
    const result = calculator(num1, {type: 'DIVIDE', number: num2});
    // 3. Сравнение с ожидаемым результатом
    expect(result).toBe(1);
})

test('subtract of calculator', () => {
    // 1. Тестовые данные
    const action: ActionType = {type: 'SUBTRACT', number: 5}
    // 2. Выполнение тестируемого кода
    // 3. Сравнение с ожидаемым результатом
    expect(calculator(10, action)).toBe(5);
})