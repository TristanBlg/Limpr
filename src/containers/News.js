import * as React from 'react'
import {connect} from 'react-redux'
import Post from '../components/Post'

export const News = (props) => {
  const {posts} = props

  return (
    <section>
      <div className="container">
        {posts && posts.map(post => {
          return (
            <Post key={post.id} {...post}/>
          )
        })}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(
  mapStateToProps
)(News)
