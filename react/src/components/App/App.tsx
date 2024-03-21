import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layout';
import { Todo } from '../pages/todo';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<div>Hello</div>} />
                <Route path="to-dos" element={<Todo />} />
                <Route path="users" element={<div>Users</div>} />
            </Route>
            <Route path="*" element={<div>Not match</div>} />
        </Routes>
    );
};
