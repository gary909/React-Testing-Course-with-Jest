import { render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', async () => {
    // 1. render the component
    render(<UserForm />);
 
    // 2. Manipulate the component and find an element in it
    const inputs = screen.getAllByRole('textbox');
    const button= screen.getByRole('button');

    // 3. Assertion - make sure the component is doing what we expect it to.
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

    //####################-- NEW TEST --#######################

test("it calls onUserAdd when the form is submitted", async () => {
  // NOT THE BEST IMPLEMENTATION
  // Try to render my component
  render(<UserForm />);
 
  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");
 
  // Simulate typing in a name
  await user.click(nameInput); // 1. focus the input
  await user.keyboard("jane"); // 2. type in the input
 
  // Simulate typing in an email
  await user.click(emailInput); // 1. focus the input
  await user.keyboard("jane@jane.com"); // 2. type in the input
 
  // Find the button
  
 
  // Simulate clicking the button
 
  // Assertion to make sure 'onUserAdd' gets called with email/name
});