function StatCard({ icon, label, value, gradient }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border p-6 ${gradient || "bg-card"}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="text-3xl font-bold mt-1 text-foreground">{value}</p>
        </div>
        <div className="p-3 rounded-lg bg-primary/10 text-primary">{icon}</div>
      </div>
    </div>
  );
}

export default StatCard;
