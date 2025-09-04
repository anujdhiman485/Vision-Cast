import React from 'react'

const Plan = () => {
  return (
    <section
      id="pricing"
      className="relative z-10 mx-auto my-24 max-w-6xl px-6"
    >
      {/* ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* header */}
      <div className="text-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold">
          Choose Your <span className="text-[#FFD700]">Plan</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-3">
          Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
        </p>
      </div>

      {/* content slot – drop your pricing here */}
      
    </section>
  )
}

export default Plan
