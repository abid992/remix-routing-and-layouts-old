import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';

export default function UpdateExpensesPage() {
  const navigate = useNavigate();

  const closeHandler = () => {
    // Navigate programmatically to parent route
    navigate('..');
  };

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}
