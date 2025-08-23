import { useEffect, useState } from "react";
import { createCustomer, getAllCustomers, searchCustomers } from "services/customer/customerService";
import CustomerForm from "components/customer/CustomerForm";
import CustomerTable from "components/customer/CustomerTable";

export default function CustomersPage() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");
  const [error, setError] = useState("");

  const load = async () => {
    setError("");
    try {
      setList(await getAllCustomers());
    } catch (e) {
      setError("Failed to load customers.");
    }
  };

  useEffect(() => { load(); }, []);

  const handleCreate = async (payload, reset) => {
    setLoading(true);
    setError("");
    try {
      await createCustomer(payload);
      reset?.();
      await load();
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to create customer.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    if (!q.trim()) return load();
    try {
    setList(await searchCustomers(q));
    } catch {
      setError("Search failed.");
    }
  };

  return (
    <div>
      <h2>Customers</h2>

      <form onSubmit={handleSearch} className="row" style={{ marginBottom: 12 }}>
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search by name/phone/KYC" />
        <button type="submit">Search</button>
        <button type="button" onClick={() => { setQ(""); load(); }}>Reset</button>
      </form>

      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <CustomerForm onSubmit={handleCreate} loading={loading} />
      <CustomerTable data={list} />
    </div>
  );
}
