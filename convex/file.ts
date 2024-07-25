import { ConvexError, v } from 'convex/values';
import { mutation, query } from './_generated/server'



export const createFile = mutation({
    args: {
        name: v.string(),
    },
    async handler(ctx,args) {

       const identity = await ctx.auth.getUserIdentity()
            if (!identity){
                throw new ConvexError('you must be login')
            }

    await ctx.db.insert('file', {
        name: args.name,
    });
    }
}
)

export const getFiles = query({
    args:{},
    async handler(ctx,args) {
        return await ctx.db.query('file').collect()}
    })