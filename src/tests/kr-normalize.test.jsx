import kr from '../service/kr';

test('Convert from kebab case to pascal case', () => {
  expect(kr.normalize('kebabCase', 'pascalCase', 'payment-client'))
    .toBe('paymentClient');
});

test('Convert from kebab case to camel case', () => {
  expect(kr.normalize('kebabCase', 'camelCase', 'payment-client'))
    .toBe('PaymentClient');
});
