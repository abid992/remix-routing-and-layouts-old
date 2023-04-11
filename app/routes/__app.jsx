import { Outlet } from '@remix-run/react';
import ExpensesHeader from '~/components/navigation/ExpensesHeader';

import expensesStyles from '~/styles/expenses.css';

export default function ExpensesAppLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: expensesStyles }];
}

// The Layout will be loaded for one of the routes defined inside of the __app folder and it's a regular route.
