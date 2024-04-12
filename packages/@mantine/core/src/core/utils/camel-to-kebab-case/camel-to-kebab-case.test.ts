import { camelToKebabCase } from './camel-to-kebab-case';

describe('@bds-react/core/camel-to-kebab-case', () => {
  it('correctly switches cases', () => {
    expect(camelToKebabCase('padding')).toBe('padding');
    expect(camelToKebabCase('paddingLeft')).toBe('padding-left');
    expect(camelToKebabCase('borderTopLeftRadius')).toBe('border-top-left-radius');
  });
});
