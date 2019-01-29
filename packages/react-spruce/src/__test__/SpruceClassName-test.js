// @flow
import SpruceClassName from '../SpruceClassName';

test('modifier splitting', () => {
    const className = SpruceClassName({name: 'Test', modifier:'rad cool'});

    expect(
        className.match(/\bTest\b/) &&
        className.match(/\bTest-rad\b/) &&
        className.match(/\bTest-cool\b/)
    ).toBeTruthy();
});

test('peer splitting', () => {
    const className = SpruceClassName({name: 'Test', peer:'rad cool'});

    expect(
        className.match(/\bTest\b/) &&
        className.match(/\bTest--rad\b/) &&
        className.match(/\bTest--cool\b/)
    ).toBeTruthy();
});

test('extra classnames params', () => {
    const className = SpruceClassName({name: 'Test'}, 'extra');
    expect(
        className.match(/\bTest\b/) &&
        className.match(/\bextra\b/)
    ).toBeTruthy();
});

test('modifier splitting with objects', () => {
    const className = SpruceClassName({
        name: 'Test',
        modifier: {
            yes: true,
            no: false
        }
    });

    expect(
        className.match(/\bTest\b/) &&
        className.match(/\bTest-yes\b/) &&
        !className.match(/\bTest-no\b/)
    ).toBeTruthy();
});


test('parent prefixing', () => {
    const className = SpruceClassName({
        name: '_child',
        parent: 'Parent'
    });

    expect(className.trim()).toBe('Parent_child');
});


test('child without a parent will throw', () => {
    expect(() => SpruceClassName({name: '_child', parent: ''})).toThrow();
});

test('Parent without an underscored child will throw', () => {
    expect(() => SpruceClassName({parent: 'Parent', name: 'Child'})).toThrow();
});


