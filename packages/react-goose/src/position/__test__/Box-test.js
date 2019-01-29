// @flow
import React from 'react';
import Box from '../Box';

test('will render a Box', () => {
    const box = shallow(<Box>Test Box</Box>);
    expect(box).toHaveText('Test Box');
    expect(box).not.toHaveProp('modifier');
});

test('will apply boxProps to outer element', () => {
    const box = shallow(<Box boxProps={{'data-test': "test"}} />);
    expect(box).toHaveProp('data-test', 'test');
});

test('will have correct Spruce classes', () => {
    expect(shallow(<Box/>).prop('className')).toBe('Box');

    expect(shallow(<Box spruceName="Thing"/>).prop('className')).toBe('Thing');

    expect(shallow(<Box modifier="large"/>).prop('className')).toBe('Box Box-large');

    expect(shallow(<Box className="foo"/>).prop('className')).toBe('Box foo');
});test('will apply correct margin and padding', () => {
    expect(shallow(<Box margin="1 2 3 4" />).prop('style').margin).toBe('1rem 2rem 3rem 4rem');
    expect(shallow(<Box margin=" 1 2 " />).prop('style').margin).toBe('1rem 2rem');

    expect(shallow(<Box margin="1" />).prop('style').margin).toBe('1rem');
    expect(shallow(<Box marginBottom="1" />).prop('style').marginBottom).toBe('1rem');
    expect(shallow(<Box marginLeft="1" />).prop('style').marginLeft).toBe('1rem');
    expect(shallow(<Box marginRight="1" />).prop('style').marginRight).toBe('1rem');
    expect(shallow(<Box marginTop="1" />).prop('style').marginTop).toBe('1rem');
    expect(shallow(<Box padding="1" />).prop('style').padding).toBe('1rem');
    expect(shallow(<Box paddingBottom="1" />).prop('style').paddingBottom).toBe('1rem');
    expect(shallow(<Box paddingLeft="1" />).prop('style').paddingLeft).toBe('1rem');
    expect(shallow(<Box paddingRight="1" />).prop('style').paddingRight).toBe('1rem');
    expect(shallow(<Box paddingTop="1" />).prop('style').paddingTop).toBe('1rem');
});test('will not apply number/undefined margin or padding', () => {
    // $FlowFixMe - deliberate misuse of types for testing
    expect(shallow(<Box margin={1} />).prop('style').margin).toBe(undefined);
    // $FlowFixMe - deliberate misuse of types for testing
    expect(shallow(<Box margin={undefined} />).prop('style').margin).toBe(undefined);
    // $FlowFixMe - deliberate misuse of types for testing
    expect(shallow(<Box margin={null} />).prop('style').margin).toBe(undefined);
    // $FlowFixMe - deliberate misuse of types for testing
    expect(shallow(<Box margin={false} />).prop('style').margin).toBe(undefined);

    // $FlowFixMe - deliberate misuse of types for testing
    expect(shallow(<Box padding={1} />).prop('style').padding).toBe(undefined);
    // $FlowFixMe - deliberate misuse of types for testing
    expect(shallow(<Box margin={undefined} />).prop('style').margin).toBe(undefined);
    // $FlowFixMe - deliberate misuse of types for testing
    expect(shallow(<Box margin={null} />).prop('style').margin).toBe(undefined);
    // $FlowFixMe - deliberate misuse of types for testing
    expect(shallow(<Box margin={false} />).prop('style').margin).toBe(undefined);
});

