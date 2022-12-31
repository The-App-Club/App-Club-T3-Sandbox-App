import {byId} from '@/server/trpc/router/user/byId'
import {create} from '@/server/trpc/router/user/create'
import {listUp} from '@/server/trpc/router/user/listUp'
import {update} from '@/server/trpc/router/user/update'
import {router} from '@/server/trpc/trpc'

export const userRouter = router({
  listUp,
  byId,
  create,
  update,
})