import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpenseFilter from '../UI/ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
  const [filteredYear, setfilteredYear] = useState('2021');

  const filterByYearHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(item => item.date.getFullYear() === +filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onSelectedYear={filterByYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
