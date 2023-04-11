import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import Chart from '~/components/expenses/Chart';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'First Expense',
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: 'e2',
    title: 'Second Expense',
    amount: 16.99,
    date: new Date().toISOString(),
  },
];

export default function ExpensesAnalysisPage() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
}

/**
 * Adding Styles
 * Styles are missing
 * Only applied to expenses.jsx file which is not a parent of expenses route pathwise it's but from nesting perspective
 * Solution: Pathless Layout Routes: We can add extra layer of nesting withour adding a new path to the url.
 * __app folder This is a pathless layout route
 * __app.jsx file
 * This now allow us to add a layout component that does not introduce a new path to our url.
 */
