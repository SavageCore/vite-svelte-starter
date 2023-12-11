import { render } from '@testing-library/svelte';
import App from './App.svelte';

describe('App component', () => {
  it('should render without crashing', () => {
    const { container } = render(App);

    expect(container).toBeInTheDocument();
  });
});
