import {pickUser} from '@/server/trpc/router/user/byId'
import {createUser} from '@/server/trpc/router/user/create'
import {deleteUser} from '@/server/trpc/router/user/delete'
import {listUpUser} from '@/server/trpc/router/user/listUp'
import {updateUser} from '@/server/trpc/router/user/update'
import {router} from '@/server/trpc/trpc'

export const userRouter = router({
  listUp: listUpUser,
  byId: pickUser,
  create: createUser,
  update: updateUser,
  delete: deleteUser,
})
