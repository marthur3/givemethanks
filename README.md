# Card Designer and Management System

A React-based application for designing, generating, and tracking greeting cards. This application allows users to create custom cards with AI-generated messages, manage contacts, and track sent cards.

## Features

### Card Designer
- Select from multiple card designs (Birthday, Thank You, Congratulations, Sympathy)
- Choose different stationery types (Matte, Glossy, Textured, Recycled)
- AI-powered message generation
- Real-time card preview
- Custom message editing

### Contact Manager
- Add and remove contacts
- Store contact names and email addresses
- Simple and intuitive interface
- Persistent contact list management

### Sent Card Tracker
- Track all sent cards
- View recipient details
- Monitor card designs used
- Track sending dates

## Technical Stack

- React with TypeScript
- Next.js (Client-side components)
- Tailwind CSS for styling
- shadcn/ui components library
- AI integration for message generation

## Components

### CardDesigner.tsx
The main card design interface that includes:
- Design selection dropdown
- Stationery type selection
- Message generation and editing
- Card preview
- Toast notifications for error handling

### ContactManager.tsx
A contact management system featuring:
- Contact addition form
- Contact list display
- Contact deletion functionality
- Type-safe contact handling

### SentCardTracker.tsx
A tracking system that displays:
- Tabular view of sent cards
- Recipient information
- Card design details
- Sending dates

## Setup

1. Install dependencies:
```bash
npm install
```

2. Required UI components:
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add select button textarea input toast
```

3. Make sure you have the following environment variables set up for AI message generation:
```env
# Add your AI service credentials here
AI_API_KEY=your_api_key
```

## Usage

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── CardDesigner.tsx
│   ├── ContactManager.tsx
│   └── SentCardTracker.tsx
├── actions/
│   └── generateMessage.ts
└── components/ui/
    ├── select.tsx
    ├── button.tsx
    ├── textarea.tsx
    └── input.tsx
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
