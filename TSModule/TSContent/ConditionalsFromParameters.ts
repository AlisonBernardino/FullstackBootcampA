// Conditionals created from parameters
interface UserInterface {
  ID: string;
  occupation?: string;
}

interface AdministratorInterface extends UserInterface {
  position: 'Manager' | 'Supervisor' | 'Coordinator';
}

function redirectData(user: UserInterface | AdministratorInterface) {
  if ('position' in user) {
    // User will be redirected to "Administration" section
  }

  // User will be redirected to "Common users" section

  // Using the "?" character for optional variables
  if (user.occupation) {
    // redirectUser(user.occupation);
  }

  // User will be redirected to "Common users" section
}
