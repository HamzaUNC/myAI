import { OWNER_NAME, AI_NAME } from "./identity";

// TrailBuddy-specific configurations
export const INITIAL_MESSAGE: string = `Hi! I'm ${AI_NAME}, your hiking companion. Ready to explore trails, plan routes, or learn outdoor safety tips?`; 

export const DEFAULT_RESPONSE_MESSAGE: string = 
`I’m having trouble answering that. Let’s focus on:
- Trail conditions 🥾
- Gear recommendations 🎒
- Navigation tips 🧭
- Wildlife safety 🐻`;

// Reduce word limit for outdoor-focused queries
export const WORD_CUTOFF: number = 1000; 

export const WORD_BREAK_MESSAGE: string = 
`Whoa, that’s a long trail journal entry! Let’s break it down into smaller sections. 
Try asking about specific trail segments or features.`;

// Keep conversation focused on recent trail topics
export const HISTORY_CONTEXT_LENGTH: number = 5; 
