import React from 'react';
import { render } from '@testing-library/react';
import GHButton from '../GHButton';

describe('<GHButton />', () => {
  test('should render correctly', async () => {
    const { asFragment } = await render(
      <GHButton
        resource={{
          endpoint: 'https://api.github.com/users/mahdi-malv',
          attr: 'followers',
        }}
        href="https://github.com/mahdi-malv"
        title="Follow @mahdi-malv on GitHub"
        text="Follow @mahdi-malv on GitHub"
        icon={{
          prefix: 'fab',
          iconName: 'github',
        }}
        size="lg"
        showCount={true}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
