export const list = (req, res) => res.send('<h1>User List</h1>');
export const info = (req, res) => res.send(`<h1>User Info: ${req.params.id}</h1>`);
export const edit = (req, res) => res.send('<h1>User Edit</h1>');
export const signUp = (req, res) => res.send('<h1>Join</h1>');
export const signIn = (req, res) => res.send('<h1>Login</h1>');
export const signOut = (req, res) => res.send('<h1>Logout</h1>');
