import React from 'react'
import reactPropsQuiz from '../Data/faqss'

const Faq = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
  <div className="max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
      React Props Quiz
    </h1>

    <div className="space-y-5">
      {reactPropsQuiz.map((q, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            {index + 1}. {q.question}
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {q.answer}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default Faq;
