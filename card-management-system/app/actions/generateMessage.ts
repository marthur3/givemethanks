'use server'

import { generateText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'

// Create OpenAI instance with explicit API key from environment variable
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateMessage(design: string) {
  try {
    const prompt = `Generate a short greeting card message for a ${design} card.`
    
    const { text } = await generateText({
      model: openai('gpt-4'),
      prompt: prompt
    })

    return text
  } catch (error) {
    console.error('Error generating message:', error)
    return 'Unable to generate message. Please try again.'
  }
}

