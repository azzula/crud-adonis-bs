'use strict'

const Post = use('App/Models/Post')

class PostController {
    // index
    async index({ request, response, view }) {
        const post = await Post.all()

        return view.render('post.index', { post: post.rows })
    }

    // create
    create({ request, response, view }) {
        return view.render('post.create')
    }
      
    async store({ request, response, view, session }) {
        const post = new Post()
      
        post.title    = request.input('title')
        post.content  = request.input('content')
        await post.save()
      
        session.flash({ notification: 'Data Berhasil Tersimpan!' })
        return response.route('post.index')
    }

    // update
    async edit({ request, response, view, params }) {
        const id    = params.id
        const post  = await Post.find(id)
      
        return view.render('post.update', { post: post })
    }
      
    async update({ request, response, view, params, session }) {
        const id    = params.id
        const post  = await Post.find(id)
      
        post.title    = request.input('title')
        post.content  = request.input('content')
        await post.save()
      
        session.flash({ notification: 'Data Berhasil Diperbarui!' })
        return response.route('post.index')
    }

    // delete
    async remove({ request, response, view, params }) {
        const id    = params.id
        const post  = await Post.find(id)
      
        return view.render('post.delete', { post: post })
    }

    async delete({ request, response, view, params, session}) {
        const id = params.id
        const post = await Post.find(id)
        await post.delete()
      
        session.flash({ notification: 'Data Berhasil Dihapus!' })
        return response.route('post.index')
    }
}

module.exports = PostController
