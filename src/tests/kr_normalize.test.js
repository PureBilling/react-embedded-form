import kr from '../service/kr';

/**
 * ./node_modules/jest/bin/jest.js kr_basic.spec.js
 */
it("Convert from kebab case to pascal case", done => {
  expect(kr.normalize("kebabCase", "pascalCase", "payment-client"))
    .toBe("paymentClient");
  done();
});

it("Convert from kebab case to camel case", done => {
  expect(kr.normalize("kebabCase", "camelCase", "payment-client"))
    .toBe("PaymentClient");
  done();
});
