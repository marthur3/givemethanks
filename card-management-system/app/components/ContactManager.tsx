'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Contact = {
  id: number
  name: string
  email: string
}

export default function ContactManager() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const addContact = () => {
    if (name && email) {
      setContacts([...contacts, { id: Date.now(), name, email }])
      setName('')
      setEmail('')
    }
  }

  const deleteContact = (id: number) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Contact Manager</h2>
      <div className="flex space-x-2">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={addContact}>Add Contact</Button>
      </div>
      <ul className="space-y-2">
        {contacts.map(contact => (
          <li key={contact.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span>{contact.name} ({contact.email})</span>
            <Button variant="destructive" onClick={() => deleteContact(contact.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

