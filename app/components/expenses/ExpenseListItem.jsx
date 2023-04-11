import { Link } from '@remix-run/react';

function ExpenseListItem({ id, title, amount }) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        {/* We need the id of the expense that should be edited */}
        {/* <a href="/expenses/edit">Edit</a> */}
        {/* We wanna creata a relative link where we simply point at that id */}
        {/* Relative link */}
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
