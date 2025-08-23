import { useState } from "react";

export default function CustomerForm({ onSubmit, loading }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    kycId: "",
    address: "",
    email: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form, () => {
      // reset if parent says OK
      setForm({ name: "", phone: "", kycId: "", address: "", email: "" });
    });
  };

  return (
    <div className="card">
      <h3>Add Customer</h3>
      <form onSubmit={handleSubmit} className="row">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
        <input name="kycId" placeholder="KYC ID" value={form.kycId} onChange={handleChange} required />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <button type="submit" disabled={loading}>{loading ? "Saving..." : "Save"}</button>
      </form>
    </div>
  );
}
