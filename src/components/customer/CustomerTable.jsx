
export default function CustomerTable({ data = [] }) {
  if (!data.length) return <p>No customers yet.</p>;
  return (
    <div className="card">
      <h3>Customers</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Phone</th><th>KYC</th><th>Address</th><th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.kycId}</td>
              <td>{c.address}</td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
