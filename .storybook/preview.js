/** @type { import('@storybook/react').Preview } */
import { CoinProvider } from '@context/CoinContext';


export const decorators = [
  (Story) => (
    <CoinProvider>
      <Story />
    </CoinProvider>
  ),
];
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
