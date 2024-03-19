import { useNavigate } from 'react-router-dom';
import '../assets/Design/PayHistory.css';
import NavAdmin from '../components/UI/NavAdmin';

function PayHistory() {
  // Dummy data for payment history (replace with your actual data)
  const payments = [
    {
      paymentId: 1,
      userId: 101,
      status: 'Success',
      totalAmount: '$150',
      paymentDate: '2024-03-20',
      modeOfPayment: 'Credit Card'
    },
    {
      paymentId: 2,
      userId: 102,
      status: 'Pending',
      totalAmount: '$100',
      paymentDate: '2024-03-22',
      modeOfPayment: 'PayPal'
    }
    // Add more payment objects as needed
  ];

  const nav = useNavigate();
  const handleBack = () => {
    nav("/admindash");
  };

  return (
    <>
     <NavAdmin/>
    <div className="pay-history-container-custom">
      <h2  className="payment-history-header-custom">Payment History</h2>
      <button style={{marginBottom:'10px'}} onClick={handleBack} className="back-to-dashboard-button-custom">Back to Dashboard</button>
      <div className="payment-table-custom">
        <table>
          <thead>
            <tr>
              <th>Payment Id</th>
              <th>User Id</th>
              <th>Status</th>
              <th>Total Amount</th>
              <th>Payment Date</th>
              <th>Mode of Payment</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.paymentId}>
                <td>{payment.paymentId}</td>
                <td>{payment.userId}</td>
                <td>{payment.status}</td>
                <td>{payment.totalAmount}</td>
                <td>{payment.paymentDate}</td>
                <td>{payment.modeOfPayment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default PayHistory;
