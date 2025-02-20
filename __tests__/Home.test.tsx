import {render,screen} from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom';

it('should have Docs text', async () => {
    render(<Home />);
    const myElem = await screen.findByText('User Profile Component');
    expect(myElem).toBeInTheDocument();
  });
  