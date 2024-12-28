'use client'

import { useState } from 'react'

type SentCard = {
  id: number
  recipient: string
  design: string
  dateSent: string
}

export default function SentCardTracker() {
  const [sentCards] = useState<SentCard[]>([
    { id: 1, recipient: 'John Doe', design: 'Birthday', dateSent: '2023-06-15' },
    { id: 2, recipient: 'Jane Smith', design: 'Thank You', dateSent: '2023-06-10' },
  ])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Sent Cards</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Recipient</th>
            <th className="p-2 text-left">Design</th>
            <th className="p-2 text-left">Date Sent</th>
          </tr>
        </thead>
        <tbody>
          {sentCards.map(card => (
            <tr key={card.id} className="border-b">
              <td className="p-2">{card.recipient}</td>
              <td className="p-2">{card.design}</td>
              <td className="p-2">{card.dateSent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

