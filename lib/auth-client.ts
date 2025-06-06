import { DEFAULT_ROLE } from "@/assets/constants"
import { inferAdditionalFields } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || '',
    plugins: [
        inferAdditionalFields({
          user: {
            phone: {
              type: 'string',
              required: false
            },
            role: {
              type: 'string',
              required: false,
              defaultValue: DEFAULT_ROLE
            },
            avatar: {
              type: 'string',
              required: false
            }
          }
        })
      ]
})