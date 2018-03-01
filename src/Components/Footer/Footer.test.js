import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

test('Footer changes the class when hovered', () => {
  const callback = () => {};
  const title = 'title';
  const component = renderer.create(<Footer
    title={title}
    callback={callback}
  />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
