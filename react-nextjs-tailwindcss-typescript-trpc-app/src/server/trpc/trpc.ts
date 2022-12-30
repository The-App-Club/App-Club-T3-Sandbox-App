import {initTRPC} from '@trpc/server'
import superjson from 'superjson'

import {type Context} from '@/server/trpc/context'

import type {DefaultErrorShape} from '@trpc/server'

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({shape}: {shape: DefaultErrorShape}) {
    console.log(shape)
    return shape
  },
})

export const router = t.router

export const publicProcedure = t.procedure
