import type {AppRouter} from '@/server/trpc/router/_app'
import type {TRPCClientErrorLike} from '@trpc/client'

export type ErrorData = TRPCClientErrorLike<AppRouter> | null | undefined
