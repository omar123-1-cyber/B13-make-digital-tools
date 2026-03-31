const StepsData = [
  { step: "01", title: "Browse Tools", desc: "Explore our curated collection of premium digital tools across all categories.", icon: "🔍" },
  { step: "02", title: "Add to Cart", desc: "Select the tools you need and add them to your cart with a single click.", icon: "🛒" },
  { step: "03", title: "Checkout Securely", desc: "Complete your purchase through our encrypted, secure checkout process.", icon: "🔒" },
  { step: "04", title: "Instant Access", desc: "Get immediate access to your purchased tools with license keys delivered instantly.", icon: "🚀" },
];

const Steps = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Get your favourite tools up and running in just four simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {StepsData.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg">
                {s.icon}
              </div>
              <span className="text-xs font-bold text-blue-400 tracking-widest">STEP {s.step}</span>
              <h3 className="font-bold text-gray-900 text-lg">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              {i < StepsData.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-blue-100" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;