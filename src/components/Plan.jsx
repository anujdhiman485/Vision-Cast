import React, { useState } from "react";

const plans = [
  { id: "basic", name: "Basic", price: "₹0/mo", features: ["5 Time Image Generation ", "5 Time Videos Generation","8 Time Posting"] },
  { id: "premium", name: "Premium", price: "₹999/mo", features: ["Unlimted Images Generation", "Unlimted Videos Generationre", "Schduling Post","Unlimted Posting"] },
];

const Plan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isPremium, setIsPremium] = useState(localStorage.getItem("isPremium") === "true");

  const handleConfirm = () => {
    if (!selectedPlan) return;

    if (selectedPlan.id === "premium") {
      // upgrade
      setIsPremium(true);
      localStorage.setItem("isPremium", "true");
    } else {
      // downgrade to basic
      setIsPremium(false);
      localStorage.setItem("isPremium", "false");
    }
    setSelectedPlan(null);
  };

  return (
    <section id="pricing" className="relative z-10 mx-auto my-24 max-w-6xl px-6">
      {/* header */}
      <div className="text-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold">
          Choose Your <span className="text-[#FFD700]">Plan</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-3">
          Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
        </p>
      </div>

      {/* plan cards - centered & aligned */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-fit mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="rounded-2xl bg-gray-900 p-6 shadow-lg border border-gray-700 w-80 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white">{plan.name}</h3>
            <p className="text-[#FFD700] text-2xl mt-2">{plan.price}</p>
            <ul className="mt-4 text-gray-400 space-y-2 flex-1">
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedPlan(plan)}
              className="mt-6 w-full rounded-xl bg-[#FFD700] text-black font-semibold px-4 py-2 hover:bg-yellow-400"
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>

      {/* themed premium badge (shows only when premium) */}
      {isPremium && (
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] px-6 py-3 rounded-full font-semibold shadow-md">
             You are now a Premium Member!
          </div>
        </div>
      )}

      {/* modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-md shadow-xl border border-gray-700">
            <h3 className="text-white text-2xl font-bold">Checkout</h3>
            <p className="text-gray-400 mt-2">
              You are choosing{" "}
              <span className="text-[#FFD700]">{selectedPlan.name}</span> ({selectedPlan.price})
            </p>

            {/* Show payment fields ONLY for Premium */}
            {selectedPlan.id === "premium" ? (
              <div className="mt-4 space-y-3">
                <input className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white" placeholder="Card Number" />
                <div className="flex gap-2">
                  <input className="w-1/2 px-3 py-2 rounded-lg bg-gray-800 text-white" placeholder="MM/YY" />
                  <input className="w-1/2 px-3 py-2 rounded-lg bg-gray-800 text-white" placeholder="CVC" />
                </div>
              </div>
            ) : (
              <div className="mt-4 text-sm text-gray-300 bg-gray-800/60 border border-gray-700 rounded-lg p-3">
                No payment required for Basic. Click <span className="text-[#FFD700] font-medium">Confirm</span> to switch.
              </div>
            )}

            {/* actions */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setSelectedPlan(null)}
                className="flex-1 rounded-xl border border-gray-600 text-gray-300 px-4 py-2 hover:bg-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 rounded-xl bg-[#FFD700] text-black font-semibold px-4 py-2 hover:bg-yellow-400"
              >
                {selectedPlan.id === "premium" ? "Confirm Payment" : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Plan;
