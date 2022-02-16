import React from 'react';
import Test from './Test';
import renderer from 'react-test-renderer';
import jest from 'jest-mock';

test('Link changes the class when hovered', async () => {
  const component = renderer.create(
    <Test page="http://www.naver.com">Test</Test>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onMouseEnter();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onMouseLeave();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
